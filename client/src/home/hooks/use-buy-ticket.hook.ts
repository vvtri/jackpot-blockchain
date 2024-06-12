import { useToast } from '@/common/components/shadcn/use-toast';
import { getLotteryAddress } from '@/common/utils/contract.util';
import { lotteryAbi } from 'ethereum-contract';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';

export const useBuyTicketHook = () => {
  const { isConnected, chainId } = useAccount();
  const { toast } = useToast();
  const lotteryAddress = getLotteryAddress(chainId);

  const {
    data: hash,
    writeContractAsync,
    isPending,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        toast({
          variant: 'default',
          title: 'Buy ticket successfully',
        });
      },
      onError: () => {
        toast({
          variant: 'destructive',
          title: 'Buy ticket failed',
        });
      },
    },
  });
  const { data: ticketPrice } = useReadContract({
    abi: lotteryAbi,
    functionName: 'ticketPrice',
    address: lotteryAddress,
  });

  const buyTicket = async (amount: number, ticketNumber: number[]) => {
    if (isPending) return;
    if (!ticketPrice)
      return toast({
        variant: 'destructive',
        title: 'Some error happens (ticketPrice not found)',
      });

    if (!isConnected || !chainId)
      return toast({
        variant: 'destructive',
        title: 'Please connect to the wallet first',
      });

    const hash = await writeContractAsync({
      address: lotteryAddress,
      abi: lotteryAbi,
      functionName: 'buyTicket',
      args: [
        BigInt(amount),
        false,
        ticketNumber.map((item) => BigInt(item)) as any,
      ],
      value: ticketPrice * BigInt(amount),
    });

    return hash;
  };

  return { buyTicket, hash, isPending };
};
