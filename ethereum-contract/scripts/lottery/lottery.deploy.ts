import { ethers, upgrades } from 'hardhat';
import { getImplementationAddress } from '@openzeppelin/upgrades-core';
import { toBigInt } from 'ethers';

export async function main() {
  const Lottery = await ethers.getContractFactory(
    process.env.CONTRACT_NAME_TO_DEPLOY!,
  );

  const proxy = await upgrades.deployProxy(
    Lottery,
    [
      process.env.LOTTERY_FIRST_END_TIME!,
      process.env.LOTTERY_FRAME_DURATION!,
      toBigInt(process.env.LOTTERY_TICKET_PRICE!),
      toBigInt(process.env.LOTTERY_POWER_PLAY_PRICE!),
    ],
    {
      kind: 'uups',
      initializer: 'initialize',
    },
  );
  await proxy.waitForDeployment();

  console.log('proxy address: ', await proxy.getAddress());
  console.log(
    'implementation address',
    await getImplementationAddress(ethers.provider, await proxy.getAddress()),
  );
}

main();
