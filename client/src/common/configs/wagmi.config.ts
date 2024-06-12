import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { hardhat, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Lottery',
  projectId: '977d43c7bca228f2d395312a8c05159b',
  chains: [sepolia, hardhat],
  transports: {
    [sepolia.id]: http(),
    [hardhat.id]: http(),
  },
  ssr: true,
  multiInjectedProviderDiscovery: true,
});

declare module wagmi {
  interface Register {
    config: typeof config;
  }
}
