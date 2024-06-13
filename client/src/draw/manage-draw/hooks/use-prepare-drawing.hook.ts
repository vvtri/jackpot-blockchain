import { useToast } from '@/common/components/shadcn/use-toast';
import { getLotteryAddress } from '@/common/utils/contract.util';
import { lotteryAbi } from 'ethereum-contract';
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

export const usePrepareDrawing = (onCompleted?: () => any) => {
  const { address, chainId } = useAccount();
  const { toast } = useToast();
  const {
    writeContractAsync,
    isPending,
    data: hash,
  } = useWriteContract({
    mutation: {
      onSuccess: () =>
        toast({
          title:
            'Preapre drawing successfully. Please wait 1 minute before actually drawing',
        }),
      onError: () =>
        toast({
          title: 'Preapre drawing failed.',
        }),
    },
  });

  const prepareDrawing = async () => {
    if (isPending) return;

    const hash = await writeContractAsync({
      abi: lotteryAbi,
      address: getLotteryAddress(chainId),
      functionName: 'prepareDrawing',
      args: [],
      account: address,
    });

    return hash;
  };

  return {
    prepareDrawing,
    isPrepareDrawing: isPending,
    prepareDrawingHash: hash,
  };
};
