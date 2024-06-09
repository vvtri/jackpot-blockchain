import {
  loadFixture,
  mine,
  time,
} from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { deployLottery } from './deployment.fixture';
import { toBigInt } from 'ethers';

describe('Test main function', () => {
  it('should initialize successfully', async () => {
    const { proxy, owner, initializeParams, endTime } =
      await loadFixture(deployLottery);
    await Promise.all([
      expect(proxy.initialize(...initializeParams)).rejected,
      expect(proxy.upgradeToAndCall(ethers.ZeroAddress, ethers.ZeroHash))
        .rejected,
    ]);

    const [
      proxyOwner,
      currentFrameIdx,
      ticketPrice,
      powerPlayPrice,
      frameDuration,
      isPaused,
      firstEndTime,
    ] = await Promise.all([
      proxy.owner(),
      proxy.currentFrameIdx(),
      proxy.ticketPrice(),
      proxy.powerPlayPrice(),
      proxy.frameDuration(),
      proxy.isPaused(),
      proxy.endTimes(0),
    ]);

    expect(proxyOwner).to.be.equal(owner.address);
    expect(currentFrameIdx).to.be.equal(ethers.toBigInt(0));
    expect(ticketPrice).to.be.equal(ticketPrice);
    expect(powerPlayPrice).to.be.equal(powerPlayPrice);
    expect(frameDuration).to.be.equal(frameDuration);
    expect(isPaused).to.be.equal(false);
    expect(firstEndTime).to.be.equal(ethers.toBigInt(endTime));
  });

  it('should buy tickets successfully', async () => {
    const { proxy, ticketPrice } = await loadFixture(deployLottery);
    const ticketAmount = ethers.toBigInt(4);
    const cost = ticketAmount * ticketPrice;

    expect(await ethers.provider.getBalance(proxy.target)).to.be.equal(
      ethers.toBigInt(0),
    );

    // buy success
    const ticketNumber = [10, 11, 12, 13, 45, 15];
    const tx = await proxy.buyTicket(ticketAmount, false, ticketNumber, {
      value: cost,
    });
    await tx.wait();
    expect(await ethers.provider.getBalance(proxy.target)).to.be.equal(cost);

    // Exceed ticket amount
    await expect(
      proxy.buyTicket(15, false, ticketNumber, {
        value: toBigInt(15) * ticketPrice,
      }),
    ).rejected;

    const buyLotteryTicketTest = await ethers.deployContract(
      'BuyLotteryTicketTest',
    );
    // Revert if buyer is a contract
    await expect(
      buyLotteryTicketTest.buyLottery(
        proxy.target,
        ticketAmount,
        false,
        ticketNumber,
        { value: ticketAmount * ticketPrice },
      ),
    ).rejected;
  });

  it('should error if buy ticket with an invalid number', async () => {
    const { proxy, ticketPrice } = await loadFixture(deployLottery);
    const ticketAmount = ethers.toBigInt(4);
    const cost = ticketAmount * ticketPrice;

    // Invalid ticket number
    await Promise.all([
      expect(
        proxy.buyTicket(ticketAmount, false, [0, 1, 2, 3, 4, 5], {
          value: cost,
        }),
      ).rejected,
      expect(
        proxy.buyTicket(ticketAmount, false, [1, 1, 2, 70, 4, 25], {
          value: cost,
        }),
      ).rejected,
      expect(
        proxy.buyTicket(ticketAmount, false, [1, 1, 2, 3, 4, 0], {
          value: cost,
        }),
      ).rejected,
      expect(
        proxy.buyTicket(ticketAmount, false, [1, 1, 2, 3, 4, 27], {
          value: cost,
        }),
      ).rejected,
    ]);
  });

  it('should prepare drawing successfully', async () => {
    const { proxy, endTime, ticketPrice } = await loadFixture(deployLottery);

    await expect(proxy.prepareDrawing()).be.rejected;

    await time.increaseTo(endTime);
    await (await proxy.prepareDrawing()).wait();

    const ticketAmount = toBigInt(2);
    await proxy.buyTicket(ticketAmount, false, [1, 1, 1, 1, 1, 1], {
      value: ticketPrice * toBigInt(2),
    });

    // get ticket of next frame
    const tickets = await proxy.getTickets(toBigInt(1));
    const currentFrameIdx = await proxy.currentFrameIdx();

    expect(currentFrameIdx).eq(toBigInt(0));
    expect(tickets).lengthOf(ticketAmount);
  });

  it('should drawing successfully', async () => {
    const { others, proxy, owner, endTime, frameDuration, ticketPrice } =
      await loadFixture(deployLottery);
    const curFrameIdx = await proxy.currentFrameIdx();

    await expect(proxy.drawing()).rejected;

    await proxy.buyTicket(2, false, [1, 1, 1, 1, 1, 1], {
      value: ticketPrice * toBigInt(2),
    });

    await time.increaseTo(endTime + 1000);
    await (await proxy.prepareDrawing()).wait();
    await mine(5);

    await (await proxy.drawing()).wait();

    const nextEndTime = await proxy.endTimes(1);
    expect(nextEndTime.toString()).eq((frameDuration + endTime).toString());

    let [_, blockNumber, currentFrameIdx2] = await Promise.all([
      expect(proxy.drawing()).rejected,
      proxy.blockNumber(),
      proxy.currentFrameIdx(),
    ]);

    expect(blockNumber).eq(ethers.toBigInt(0));
    expect(currentFrameIdx2).eq(curFrameIdx + ethers.toBigInt(1));
    expect(await proxy.endTimes(currentFrameIdx2)).eq(endTime + frameDuration);

    // reject if called after 256 block
    await time.increaseTo(endTime + 1000 + frameDuration);
    await (await proxy.prepareDrawing()).wait();
    await mine(300);
    await expect(proxy.drawing()).rejected;
  });
});
