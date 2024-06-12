import { Address } from 'viem';

export const ADDRESS = {
  LOTTERY: {
    SEPOLIA: process.env
      .NEXT_PUBLIC_LOTTERY_CONTRACT_SEPOLIA_ADDRESS as Address,
    HARDHAT: process.env
      .NEXT_PUBLIC_LOTTERY_CONTRACT_HARDHAT_ADDRESS as Address,
  },
};
