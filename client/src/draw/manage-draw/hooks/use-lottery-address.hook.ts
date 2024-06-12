import { getLotteryAddress } from '@/common/utils/contract.util';
import { useAccount } from 'wagmi';

export const useLotteryAddress = () => {
  const { chainId } = useAccount();

  if (!chainId) return '';

  return getLotteryAddress(chainId);
};
