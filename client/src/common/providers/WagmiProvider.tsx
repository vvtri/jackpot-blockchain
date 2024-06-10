'use client';

import { config } from '@/common/configs/wagmi.config';
import React, { PropsWithChildren } from 'react';
import { WagmiProvider as BaseWagmiProvider } from 'wagmi';

export default function WagmiProvider({ children }: PropsWithChildren) {
  return <BaseWagmiProvider config={config}>{children}</BaseWagmiProvider>;
}
