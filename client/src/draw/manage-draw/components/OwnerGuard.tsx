'use client';

import { lotteryAbi } from 'ethereum-contract';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { Address, isAddressEqual } from 'viem';
import { useAccount, useReadContract } from 'wagmi';
import { useLotteryAddress } from '../hooks/use-lottery-address.hook';
import { useRouter } from 'next/navigation';
import MaxWidthWrapper from '@/common/components/utils/MaxWidthWrapper';

export default function OwnerGuard({ children }: PropsWithChildren) {
  const router = useRouter();
  const { address, isConnecting } = useAccount();
  const lotteryAddress = useLotteryAddress();
  const { data: ownerAddress, isFetching } = useReadContract({
    abi: lotteryAbi,
    address: lotteryAddress as Address,
    functionName: 'owner',
    query: {
      enabled: Boolean(lotteryAddress),
    },
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLoading = isConnecting || isFetching || !lotteryAddress;
  if (!mounted || isLoading)
    return (
      <MaxWidthWrapper className="pt-6 pb-12">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Is loading
        </h4>
      </MaxWidthWrapper>
    );

  if (!ownerAddress || !address || !isAddressEqual(ownerAddress, address)) {
    router.push('/');
    return <></>;
  }

  return children;
}
