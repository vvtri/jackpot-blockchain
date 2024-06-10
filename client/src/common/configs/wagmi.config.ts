import { sepolia } from 'wagmi/chains';
import { createConfig, http } from 'wagmi';
import { injected, metaMask } from 'wagmi/connectors';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'Lottery',
  projectId: '977d43c7bca228f2d395312a8c05159b',
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
  ssr: true,
});

declare module wagmi {
  interface Register {
    config: typeof config;
  }
}
