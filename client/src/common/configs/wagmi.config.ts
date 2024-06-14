import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  braveWallet,
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  phantomWallet,
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WAGMI_CONFIG_PARAMS } from './wagmi-plain.config';

export const wagmiConfig = getDefaultConfig({
  appName: 'Lottery',
  projectId: '977d43c7bca228f2d395312a8c05159b',
  ...WAGMI_CONFIG_PARAMS,
  wallets: [
    {
      wallets: [
        injectedWallet,
        metaMaskWallet,
        phantomWallet,
        rainbowWallet,
        coinbaseWallet,
        walletConnectWallet,
        braveWallet,
        ledgerWallet,
      ],
      groupName: 'Popular',
    },
  ],
});

declare module wagmi {
  interface Register {
    config: typeof wagmiConfig;
  }
}
