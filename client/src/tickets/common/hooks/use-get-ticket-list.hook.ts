import { getLotteryAddress } from '@/common/utils/contract.util';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { lotteryAbi } from 'ethereum-contract';
import { useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';

export const useGetMyTicketList = () => {
  const { chainId, address } = useAccount();
  const { openConnectModal } = useConnectModal();

  useEffect(() => {
    if (!address && openConnectModal) openConnectModal();
  }, [address]);

  const result = useReadContract({
    abi: lotteryAbi,
    address: getLotteryAddress(chainId),
    functionName: 'getMyTicketList',
    account: address,
    query: {
      enabled: Boolean(address),
    },
  });

  return { ...result };
};
