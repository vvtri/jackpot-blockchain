import { getLotteryAddress } from '@/common/utils/contract.util';
import { lotteryAbi } from 'ethereum-contract';
import { useAccount, useReadContract } from 'wagmi';

export const useGetDrawDetail = (frameIdx: number) => {
  const { chainId } = useAccount();

  const lotteryAddress = getLotteryAddress(chainId);

  const result = useReadContract({
    abi: lotteryAbi,
    address: lotteryAddress,
    functionName: 'getDrawDetail',
    args: [BigInt(frameIdx)],
  });

  return {
    ...result,
  };
};
