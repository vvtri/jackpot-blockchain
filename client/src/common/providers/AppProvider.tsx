import React, { PropsWithChildren } from 'react';
import WagmiProvider from './WagmiProvider';
import ReactQueryProvider from './ReactQueryProvider';
import ThemeProvider from './ThemeProvider';
import RainbowKitProvider from './RainbowKitProvider';

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <WagmiProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  );
}
