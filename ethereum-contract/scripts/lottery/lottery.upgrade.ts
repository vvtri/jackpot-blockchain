import { ethers, upgrades } from 'hardhat';
import { getImplementationAddress } from '@openzeppelin/upgrades-core';
import { setTimeout } from 'node:timers/promises';

export async function main() {
  const Lottery = await ethers.getContractFactory(
    process.env.CONTRACT_NAME_TO_UPGRADE!,
  );

  const proxy = await upgrades.upgradeProxy(
    process.env.LOTTERY_PROXY_ADDRESS!,
    Lottery,
    { kind: 'uups' },
  );
  await proxy.waitForDeployment();

  // wait five seconds for implementation deployed
  await setTimeout(5000);

  console.log('proxy address: ', proxy.target);
  console.log(
    'implementation address',
    await getImplementationAddress(ethers.provider, proxy.target as string),
  );
}

main();
