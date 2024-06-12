import { getLotteryAddress } from '@/common/utils/contract.util';
import { lotteryAbi } from 'ethereum-contract';
import { useAccount, useReadContract } from 'wagmi';
import { boolean } from 'boolean';

export const useGetHomeStatistic = () => {
  const { chainId } = useAccount();
  const lotteryAddress = getLotteryAddress(chainId);

  const result = useReadContract({
    address: lotteryAddress,
    abi: lotteryAbi,
    query: {
      // enabled: boolean(lotteryAddress),
    },
    functionName: 'getHomeStatistic',
  });

  return { ...result };
};
