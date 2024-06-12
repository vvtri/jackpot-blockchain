import { RainbowKitProvider as RainbowKitProviderBase } from '@rainbow-me/rainbowkit';
import { PropsWithChildren } from 'react';
import { hardhat } from 'wagmi/chains';

export default function RainbowKitProvider({ children }: PropsWithChildren) {
  return (
    <RainbowKitProviderBase initialChain={hardhat}>
      {children}
    </RainbowKitProviderBase>
  );
}
