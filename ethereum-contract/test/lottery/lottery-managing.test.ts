import {
  loadFixture,
  mine,
  time,
} from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { deployLottery } from './lottery.fixture';
import { toBigInt } from 'ethers';

describe('Test managing lottery', () => {
  it('should buy ticket correctly at paused', async () => {
    const { proxy, others, endTime, ticketPrice } =
      await loadFixture(deployLottery);
    const [user1] = others;

    expect(await proxy.isPaused()).false;

    // after pause, we can still buy ticket until end time
    (await proxy.pause()).wait();
    await expect(proxy.pause()).rejected;

    const ticketAmount = toBigInt(2);
    const ticketNumber = [9, 9, 9, 9, 9, 9];
    const ticketCost = ticketPrice * ticketAmount;

    const buyTicket = () =>
      proxy
        .connect(user1)
        .buyTicket(ticketAmount, false, ticketNumber, { value: ticketCost });
    await (await buyTicket()).wait();

    await time.increaseTo(endTime + 1000);
    await expect(buyTicket()).rejected;

    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.drawing()).wait();

    await expect(buyTicket()).rejected;
  });

  it('should pause and restart correctly', async () => {
    const { proxy, others, endTime, frameDuration, ticketPrice } =
      await loadFixture(deployLottery);
    const [user1] = others;

    await (await proxy.pause()).wait();

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);
    (await proxy.drawing()).wait();

    const nextEndTime = endTime + frameDuration * 5;
    await time.increaseTo(nextEndTime - Math.round(frameDuration / 2));

    await expect(proxy.restart(nextEndTime - frameDuration)).rejected;
    await (await proxy.restart(nextEndTime)).wait();

    const curFrameIdx = await proxy.currentFrameIdx();
    const lastEndTime = await proxy.endTimes(curFrameIdx);

    expect(curFrameIdx).eq(toBigInt(1));
    expect(lastEndTime).eq(nextEndTime);

    await proxy.buyTicket(2, false, [1, 1, 1, 1, 1, 1], {
      value: ticketPrice * toBigInt(2),
    });
  });
});
