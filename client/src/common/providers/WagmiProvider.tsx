'use client';

import React, { PropsWithChildren } from 'react';
import { WagmiProvider as BaseWagmiProvider, State } from 'wagmi';
import { wagmiConfig } from '../configs/wagmi.config';

type WagmiProviderProps = {
  state?: State;
} & PropsWithChildren;

export default function WagmiProvider({ children, state }: WagmiProviderProps) {
  return (
    <BaseWagmiProvider config={wagmiConfig} initialState={state}>
      {children}
    </BaseWagmiProvider>
  );
}
