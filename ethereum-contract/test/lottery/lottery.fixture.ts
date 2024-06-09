import { ContractTransactionResponse } from 'ethers';
import { ethers, upgrades } from 'hardhat';
import { LotteryTest } from '../../typechain-types';
import { getImplementationAddress } from '@openzeppelin/upgrades-core';
import { bigint } from 'hardhat/internal/core/params/argumentTypes';
import dayjs from 'dayjs';

let endTimeDayjs = dayjs().hour(17).minute(0).second(0);
if (endTimeDayjs < dayjs()) {
  endTimeDayjs = endTimeDayjs.add(1, 'day');
}
export const endTime = endTimeDayjs.unix();
export const frameDuration = dayjs.duration({ days: 1 }).asSeconds();
export const ticketPrice = ethers.toBigInt(50000000000);
export const powerPlayPrice = ticketPrice / ethers.toBigInt(2);
export const initializeParams = [
  endTime,
  frameDuration,
  ticketPrice,
  powerPlayPrice,
] as const;

export const deployLottery = async () => {
  const Lottery = await ethers.getContractFactory('LotteryTest');

  const [owner, ...others] = await ethers.getSigners();

  const proxy = (await upgrades.deployProxy(Lottery, initializeParams as any, {
    kind: 'uups',
    initializer: 'initialize',
  })) as any as LotteryTest & ContractTransactionResponse;
  await proxy.waitForDeployment();

  const implementation = await getImplementationAddress(
    ethers.provider,
    proxy.target as string,
  );

  return {
    proxy,
    owner,
    others,
    implementation,
    endTime,
    frameDuration,
    ticketPrice,
    powerPlayPrice,
    initializeParams,
  };
};
