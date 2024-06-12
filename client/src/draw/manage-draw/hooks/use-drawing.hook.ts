import { useToast } from '@/common/components/shadcn/use-toast';
import { getLotteryAddress } from '@/common/utils/contract.util';
import { lotteryAbi } from 'ethereum-contract';
import { useAccount, useWriteContract } from 'wagmi';

export const useDrawing = () => {
  const { address, chainId } = useAccount();
  const { toast } = useToast();
  const { writeContractAsync, isPending } = useWriteContract({
    mutation: {
      onSuccess: () =>
        toast({
          title: 'Drawing successfully.',
        }),
      onError: () =>
        toast({
          title: 'Drawing failed.',
        }),
    },
  });

  const drawing = async () => {
    if (isPending) return;

    await writeContractAsync({
      abi: lotteryAbi,
      address: getLotteryAddress(chainId),
      functionName: 'drawing',
      args: [],
      account: address,
    });
  };

  return { drawing, isDrawing: isPending };
};
