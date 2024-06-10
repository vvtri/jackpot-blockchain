import { RainbowKitProvider as RainbowKitProviderBase } from '@rainbow-me/rainbowkit';
import { PropsWithChildren } from 'react';

export default function RainbowKitProvider({ children }: PropsWithChildren) {
  return <RainbowKitProviderBase>{children}</RainbowKitProviderBase>;
}
