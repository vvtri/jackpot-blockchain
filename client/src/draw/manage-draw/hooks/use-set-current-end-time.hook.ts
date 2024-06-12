import { useToast } from '@/common/components/shadcn/use-toast';
import { appDayjs } from '@/common/configs/dayjs.config';
import { getLotteryAddress } from '@/common/utils/contract.util';
import dayjs from 'dayjs';
import { lotteryAbi } from 'ethereum-contract';
import { useAccount, useWriteContract } from 'wagmi';

export const useSetCurrentEndTime = () => {
  const { address, chainId } = useAccount();
  const { toast } = useToast();
  const { writeContractAsync, isPending } = useWriteContract({
    mutation: {
      onSuccess: () =>
        toast({
          title: 'Set current end time successfully.',
        }),
      onError: () =>
        toast({
          title: 'Set current end time failed.',
        }),
    },
  });

  const setCurrentEndTime = async (date: Date) => {
    if (isPending) return;

    return await writeContractAsync({
      abi: lotteryAbi,
      address: getLotteryAddress(chainId),
      functionName: 'setCurrentEndTime',
      args: [BigInt(appDayjs(date).unix())],
      account: address,
    });
  };

  return { setCurrentEndTime, isSetCurrentEndTime: isPending };
};
