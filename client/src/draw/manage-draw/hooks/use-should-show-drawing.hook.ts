import { getLotteryAddress } from '@/common/utils/contract.util';
import { lotteryAbi } from 'ethereum-contract';
import { useAccount, useReadContract, useReadContracts } from 'wagmi';

export const useShouldShowDrawing = () => {
  const { chainId, address } = useAccount();
  const lotteryAddress = getLotteryAddress(chainId);

  const { data, isLoading } = useReadContracts({
    contracts: [
      {
        abi: lotteryAbi,
        functionName: 'shouldPreparingDrawing',
        address: lotteryAddress,
      },
      {
        abi: lotteryAbi,
        functionName: 'shouldDrawing',
        address: lotteryAddress,
      },
    ],
  });

  return {
    isLoading,
    shouldPreparingDrawing: data?.[0].result,
    shouldDrawing: data?.[1].result,
  };
};
