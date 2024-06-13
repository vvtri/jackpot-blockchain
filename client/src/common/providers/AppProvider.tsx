import { headers } from 'next/headers';
import { PropsWithChildren } from 'react';
import { cookieToInitialState } from 'wagmi';
import { wagmiPlainConfig } from '../configs/wagmi-plain.config';
import RainbowKitProvider from './RainbowKitProvider';
import ReactQueryProvider from './ReactQueryProvider';
import ThemeProvider from './ThemeProvider';
import WagmiProvider from './WagmiProvider';

export default function AppProvider({ children }: PropsWithChildren) {
  const cookieState = cookieToInitialState(
    wagmiPlainConfig,
    headers().get('cookie'),
  );

  return (
    <WagmiProvider state={cookieState}>
      <ReactQueryProvider>
        <ThemeProvider>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  );
}
