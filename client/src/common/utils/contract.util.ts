import { Chain, sepolia, hardhat } from 'wagmi/chains';
import { ADDRESS } from '../configs/app.config';

export const getLotteryAddress = (chainId?: Chain['id']) => {
  switch (chainId) {
    case sepolia.id:
      return ADDRESS.LOTTERY.SEPOLIA;

    case hardhat.id:
      return ADDRESS.LOTTERY.HARDHAT;

    default:
      return ADDRESS.LOTTERY.HARDHAT;
  }
};
