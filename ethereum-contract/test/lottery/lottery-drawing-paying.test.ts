import {
  loadFixture,
  mine,
  time,
} from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { parseUnits, toBigInt } from 'ethers';
import { ethers, network } from 'hardhat';
import { deployLottery, ticketPrice } from './lottery.fixture';
import { getPrize } from './lottery.helper';

describe('Test drawing and paying', () => {
  const luckyNumber = [10, 11, 11, 13, 14, 15];
  const ticketAmount = ethers.toBigInt(2);
  const ticketCost = ticketPrice * ticketAmount;

  it('should drawing successfully without paying previous one', async () => {
    const { proxy, endTime, frameDuration } = await loadFixture(deployLottery);
    const curFrameIdx = await proxy.currentFrameIdx();

    let lastFrameIdx = 5;
    let lastEndTime = endTime + lastFrameIdx * frameDuration;

    for (let i = 0; i < lastFrameIdx; i++) {
      await time.increaseTo(endTime + i * frameDuration);
      await (await proxy.prepareDrawing()).wait();
      await mine(5);
      await (await proxy.drawing()).wait();
    }

    const newFrameIdx = await proxy.currentFrameIdx();
    const newEndTime = await proxy.endTimes(newFrameIdx);

    expect(newFrameIdx).eq(lastFrameIdx);
    expect(newEndTime).eq(lastEndTime);
  });

  it(`should win NOT_LUCKY prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1] = others;
    const ticketNumber = [9, 9, 9, 9, 9, 9];

    await proxy
      .connect(user1)
      .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });
    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories).empty;
  });

  it(`should win LAST_NUMBER prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1] = others;

    const ticketNumber = [9, 9, 9, 9, 9, 15];
    const LAST_NUMBER = await proxy.LOTTERY_PRIZES_LAST_NUMBER();

    await proxy
      .connect(user1)
      .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });
    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === LAST_NUMBER)).true;
    expect(winHistories).lengthOf(ticketAmount);
  });

  it(`should win TWO_FIRST_AND_LAST prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1, user2] = others;
    const ticketNumber = [9, 9, 9, 13, 14, 15];
    const ticketNumber2 = [14, 9, 13, 9, 9, 15];
    const ticketNumber3 = [9, 11, 11, 9, 9, 15];

    const TWO_FIRST_AND_LAST =
      await proxy.LOTTERY_PRIZES_TWO_FIRST_NUMBER_AND_LAST_NUMBER();

    await Promise.all([
      proxy
        .connect(user1)
        .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost }),
      proxy
        .connect(user2)
        .buyTicket(ticketAmount, false, ticketNumber2, { value: ticketCost }),
      proxy
        .connect(user2)
        .buyTicket(ticketAmount, false, ticketNumber3, { value: ticketCost }),
    ]);

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === TWO_FIRST_AND_LAST))
      .true;
    expect(winHistories).lengthOf(ticketAmount * ethers.toBigInt(3));
  });

  it(`should win THREE_FIRST prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1, user2] = others;
    const ticketNumber = [13, 9, 10, 11, 9, 9];

    const THREE_FIRST = await proxy.LOTTERY_PRIZES_THREE_FIRST_NUMBER();

    await proxy
      .connect(user1)
      .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === THREE_FIRST)).true;
    expect(winHistories).lengthOf(ticketAmount);
  });

  it(`should win THREE_FIRST_AND_LAST prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1, user2] = others;
    const ticketNumber = [13, 9, 10, 11, 9, 15];

    const THREE_FIRST_AND_LAST =
      await proxy.LOTTERY_PRIZES_THREE_FIRST_NUMBER_AND_LAST_NUMBER();

    await proxy
      .connect(user1)
      .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === THREE_FIRST_AND_LAST))
      .true;
    expect(winHistories).lengthOf(ticketAmount);
  });

  it(`should win FOUR_FIRST prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1, user2] = others;
    const ticketNumber = [13, 14, 10, 11, 9, 9];

    const FOUR_FIRST = await proxy.LOTTERY_PRIZES_FOUR_FIRST_NUMBER();

    await proxy
      .connect(user1)
      .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === FOUR_FIRST)).true;
    expect(winHistories).lengthOf(ticketAmount);
  });

  it(`should win FOUR_FIRST_AND_LAST prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1, user2] = others;
    const ticketNumber = [13, 14, 10, 11, 9, 15];

    const FOUR_FIRST_AND_LAST =
      await proxy.LOTTERY_PRIZES_FOUR_FIRST_NUMBER_AND_LAST_NUMBER();

    await proxy
      .connect(user1)
      .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === FOUR_FIRST_AND_LAST))
      .true;
    expect(winHistories).lengthOf(ticketAmount);
  });

  it(`should win FIVE_FIRST prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1, user2] = others;
    const ticketNumber = [13, 11, 14, 11, 10, 9];

    const FIVE_FIRST = await proxy.LOTTERY_PRIZES_FIVE_FIRST_NUMBER();

    await proxy
      .connect(user1)
      .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === FIVE_FIRST)).true;
    expect(winHistories).lengthOf(ticketAmount);
  });

  it(`should win JACKPOT prize`, async () => {
    const { others, proxy, endTime } = await loadFixture(deployLottery);
    const [user1, user2] = others;
    const ticketNumber = [13, 11, 14, 11, 10, 15];

    const JACKPOT = await proxy.LOTTERY_PRIZES_JACKPOT();

    await Promise.all([
      proxy
        .connect(user1)
        .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost }),
      proxy
        .connect(user2)
        .buyTicket(ticketAmount, false, luckyNumber, { value: ticketCost }),
    ]);

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    const winHistories = await proxy.getWinningHistoryByFrame(
      ethers.toBigInt(0),
    );

    expect(winHistories.every((item) => item.prize === JACKPOT)).true;
    expect(winHistories).lengthOf(ticketAmount * ethers.toBigInt(2));
  });

  it(`should pay for winner correctly`, async () => {
    const { others, proxy, owner, endTime } = await loadFixture(deployLottery);
    const [user1, user2, user3, user4, user5, user6, user7, user8] = others;
    const luckyNumber = [10, 11, 11, 13, 14, 15];
    const {
      FIVE_FIRST_NUMBER,
      FOUR_FIRST_NUMBER,
      FOUR_FIRST_NUMBER_AND_LAST_NUMBER,
      JACKPOT,
      LAST_NUMBER,
      THREE_FIRST_NUMBER,
      TWO_FIRST_NUMBER_AND_LAST_NUMBER,
      THREE_FIRST_NUMBER_AND_LAST_NUMBER,
    } = await getPrize(proxy);

    parseUnits('1.052505905', 'ether') * toBigInt(2);

    const testData = {
      [user1.address]: {
        ticketNumber: [9, 9, 9, 9, 9, 15],
        prize: LAST_NUMBER,
        winningMoney: ticketAmount * ticketPrice * toBigInt(4),
        // test balance before and after
      },
      [user2.address]: {
        ticketNumber: [9, 9, 9, 11, 11, 15],
        prize: TWO_FIRST_NUMBER_AND_LAST_NUMBER,
        winningMoney: ticketAmount * ticketPrice * toBigInt(7),
      },
      [user3.address]: {
        ticketNumber: [9, 9, 10, 11, 11, 9],
        prize: THREE_FIRST_NUMBER,
        winningMoney: ticketAmount * ticketPrice * toBigInt(7),
      },
      [user4.address]: {
        ticketNumber: [9, 9, 10, 11, 11, 15],
        prize: THREE_FIRST_NUMBER_AND_LAST_NUMBER,
        winningMoney: ticketAmount * ticketPrice * toBigInt(100),
      },
      [user5.address]: {
        ticketNumber: [9, 14, 10, 11, 11, 9],
        prize: FOUR_FIRST_NUMBER,
        winningMoney: ticketAmount * ticketPrice * toBigInt(100),
      },
      [user6.address]: {
        ticketNumber: [9, 14, 10, 11, 11, 15],
        prize: FOUR_FIRST_NUMBER_AND_LAST_NUMBER,
        winningMoney: ticketAmount * ticketPrice * toBigInt(50_000),
      },
      [user7.address]: {
        ticketNumber: [13, 14, 10, 11, 11, 9],
        prize: FIVE_FIRST_NUMBER,
        winningMoney: ticketAmount * ticketPrice * toBigInt(1_000_000),
      },
      [user8.address]: {
        ticketNumber: [10, 11, 11, 13, 14, 15],
        prize: JACKPOT,
        winningMoney: ticketAmount * parseUnits('1', 'ether'),
      },
    };

    await Promise.all([
      proxy
        .connect(user1)
        .buyTicket(ticketAmount, false, testData[user1.address].ticketNumber, {
          value: ticketCost,
        }),
      proxy
        .connect(user2)
        .buyTicket(ticketAmount, false, testData[user2.address].ticketNumber, {
          value: ticketCost,
        }),
      proxy
        .connect(user3)
        .buyTicket(ticketAmount, false, testData[user3.address].ticketNumber, {
          value: ticketCost,
        }),
      proxy
        .connect(user4)
        .buyTicket(ticketAmount, false, testData[user4.address].ticketNumber, {
          value: ticketCost,
        }),
      proxy
        .connect(user5)
        .buyTicket(ticketAmount, false, testData[user5.address].ticketNumber, {
          value: ticketCost,
        }),
      proxy
        .connect(user6)
        .buyTicket(ticketAmount, false, testData[user6.address].ticketNumber, {
          value: ticketCost,
        }),
      proxy
        .connect(user7)
        .buyTicket(ticketAmount, false, testData[user7.address].ticketNumber, {
          value: ticketCost,
        }),
      proxy
        .connect(user8)
        .buyTicket(ticketAmount, false, testData[user8.address].ticketNumber, {
          value: ticketCost,
        }),
    ]);

    // reset balance of all account
    await Promise.all(
      Object.keys(testData).map(async (address) =>
        network.provider.send('hardhat_setBalance', [address, ethers.ZeroHash]),
      ),
    );

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.testDrawing(luckyNumber)).wait();

    let totalMoneyToPaid = toBigInt(0);
    for (const item of Object.values(testData)) {
      totalMoneyToPaid += item.winningMoney;
    }

    const [prizeOfFrame, balanceBefore, isPaidForWinnersBefore] =
      await Promise.all([
        proxy.getPrizeOfFrame(ethers.toBigInt(0)),
        ethers.provider.getBalance(proxy.target),
        proxy.isPaidForWinners(0),
      ]);

    expect(totalMoneyToPaid).eq(prizeOfFrame);
    expect(balanceBefore).greaterThan(toBigInt(0));
    expect(isPaidForWinnersBefore).false;

    await (
      await owner.sendTransaction({ to: proxy.target, value: totalMoneyToPaid })
    ).wait();

    await (await proxy.payForWinners(0)).wait();

    const [balanceAfter, isPaidForWinnersAfter] = await Promise.all([
      ethers.provider.getBalance(proxy.target),
      proxy.isPaidForWinners(0),
      expect(proxy.payForWinners(0)).rejected,
    ]);

    expect(balanceBefore).eq(balanceAfter);
    expect(isPaidForWinnersAfter).true;

    // check user balance have been added correct winning money
    await Promise.all(
      Object.keys(testData).map(async (address) => {
        const balance = await ethers.provider.getBalance(address);
        expect(balance).eq(testData[address].winningMoney);
      }),
    );
  });
});
