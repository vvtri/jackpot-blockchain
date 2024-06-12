import { CacheKey } from '@/common/constants/react-query.constant';
import { getLotteryAddress } from '@/common/utils/contract.util';
import { lotteryAbi } from 'ethereum-contract';
import { useAccount, useInfiniteReadContracts } from 'wagmi';

export const useGetDrawListHook = () => {
  const { chainId } = useAccount();

  const lotteryAddress = getLotteryAddress(chainId);

  const result = useInfiniteReadContracts({
    cacheKey: CacheKey.GET_DRAW_LIST,
    contracts: (pageParams) => {
      return [
        {
          address: lotteryAddress,
          abi: lotteryAbi,
          functionName: 'getDrawList',
          args: [{ page: BigInt(pageParams), size: BigInt(10) }],
        },
      ];
    },
    query: {
      initialPageParam: BigInt(1),
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        const totalPage = lastPage[0].result?.totalPage;

        if (!totalPage) return BigInt(1);

        if (lastPageParam < totalPage) return lastPageParam + BigInt(1);
        return undefined;
      },
    },
  });

  type PageItem = Exclude<(typeof result)['data'], null | undefined>['0'];

  return {
    ...result,
    // @ts-ignore
    data: result.data?.pages as [PageItem][],
  };
};
