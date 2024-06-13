import { deployLottery } from './lottery.fixture';
import { parseUnits, toBigInt } from 'ethers';
import {
  loadFixture,
  mine,
  time,
} from '@nomicfoundation/hardhat-network-helpers';
import { expect, use } from 'chai';
import chaiEach from 'chai-each';
use(chaiEach);

describe('Test lottery view', () => {
  it('should get home statistic successfully', async () => {
    const { proxy, owner, others, ticketPrice, frameDuration, endTime } =
      await loadFixture(deployLottery);

    const [user1, user2] = others;
    const ticketNumberJackpot = [9, 9, 9, 9, 9, 9];
    const ticketNumberMatchFive = [9, 9, 9, 9, 9, 19];
    const ticketAmount = toBigInt(2);

    await Promise.all([
      proxy.connect(user1).buyTicket(ticketAmount, false, ticketNumberJackpot, {
        value: ticketAmount * ticketPrice,
      }),
      proxy
        .connect(user2)
        .buyTicket(ticketAmount, false, ticketNumberMatchFive, {
          value: ticketAmount * ticketPrice,
        }),
    ]);

    await time.increaseTo(endTime);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(ticketNumberJackpot)).wait();

    const { lastDraw, nextDraw } = await proxy.getHomeStatistic();

    expect(lastDraw.endTime).eq(endTime);
    expect(lastDraw.frameIdx).eq(0);
    expect(lastDraw.luckyNumber).deep.eq(ticketNumberJackpot);
    expect(lastDraw.jackpotWinners).lengthOf(ticketAmount);
    expect(lastDraw.jackpotWinners).each.eq(await user1.getAddress());
    expect(lastDraw.matchFiveWinners).lengthOf(ticketAmount);
    expect(lastDraw.matchFiveWinners).each.eq(await user2.getAddress());

    expect(nextDraw.endTime).eq(endTime + frameDuration);
    expect(nextDraw.frameIdx).eq(1);
    expect(nextDraw.luckyNumber).each.eq(0);
    expect(nextDraw.jackpotWinners).lengthOf(0);
    expect(nextDraw.matchFiveWinners).lengthOf(0);
  });

  it('should get home statistic correctly', async () => {
    const { proxy } = await loadFixture(deployLottery);

    const { lastDraw, nextDraw } = await proxy.getHomeStatistic();
    expect(lastDraw.isExist).false;
    expect(nextDraw.isExist).true;
    expect(nextDraw.isFuture).true;
  });

  it('should get list draw and draw detail successfully', async () => {
    const { proxy, owner, endTime, ticketPrice } =
      await loadFixture(deployLottery);

    const prevDrawList = await proxy.getDrawList({ page: 1, size: 20 });
    expect(prevDrawList.totalPage).eq(0);

    const luckyNumber = [9, 9, 9, 9, 9, 9];

    await Promise.all([
      proxy.buyTicket(1, false, luckyNumber, { value: ticketPrice }),
      proxy.buyTicket(1, false, [9, 9, 9, 9, 9, 1], { value: ticketPrice }),
      proxy.buyTicket(1, false, [9, 9, 9, 9, 1, 9], { value: ticketPrice }),
      proxy.buyTicket(1, false, [9, 9, 9, 9, 1, 1], { value: ticketPrice }),
      proxy.buyTicket(1, false, [9, 9, 9, 1, 1, 9], { value: ticketPrice }),
      proxy.buyTicket(1, false, [9, 9, 9, 1, 1, 1], { value: ticketPrice }),
      proxy.buyTicket(1, false, [9, 9, 1, 1, 1, 9], { value: ticketPrice }),
      proxy.buyTicket(1, false, [1, 1, 1, 1, 1, 9], { value: ticketPrice }),
    ]);

    await time.increaseTo(endTime);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing([9, 9, 9, 9, 9, 9])).wait();

    const { totalPage, draws } = await proxy.getDrawList({ page: 1, size: 20 });
    expect(totalPage).eq(1);

    expect(draws).lengthOf(1);

    const {
      endTime: drawEndTime,
      luckyNumber: drawLuckyNumber,
      jackpot,
      matchFive,
      matchFourAndLast,
      matchFour,
      matchThreeAndLast,
      matchThree,
      matchTwoAndLast,
      matchLast,
    } = await proxy.getDrawDetail(draws[0].frameIdx);

    expect(drawEndTime).eq(endTime);
    expect(drawLuckyNumber).deep.eq(luckyNumber);
    expect(jackpot.money).eq(parseUnits('1', 'ether'));
    expect(jackpot.winners).lengthOf(1);
    expect(matchFive.winners).lengthOf(1);
    expect(matchFourAndLast.winners).lengthOf(1);
    expect(matchFour.winners).lengthOf(1);
    expect(matchThreeAndLast.winners).lengthOf(1);
    expect(matchThree.winners).lengthOf(1);
    expect(matchTwoAndLast.winners).lengthOf(1);
    expect(matchLast.winners).lengthOf(1);
  });

  it('should get list ticket successfully', async () => {
    const { proxy, owner, endTime, ticketPrice } =
      await loadFixture(deployLottery);

    const luckyNumber = [9, 9, 9, 9, 9, 9];
    await (
      await proxy.buyTicket(1, false, luckyNumber, { value: ticketPrice })
    ).wait();

    const result = await proxy.getMyTicketList();
    console.log('result', result);
  });

  it('should get drawing status successfully', async () => {
    const { proxy, owner, endTime, ticketPrice } =
      await loadFixture(deployLottery);

    expect(await proxy.shouldPreparingDrawing()).false;

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();

    expect(await proxy.shouldPreparingDrawing()).true;
  });
});
