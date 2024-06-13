import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WAGMI_CONFIG_PARAMS } from './wagmi-plain.config';

export const wagmiConfig = getDefaultConfig({
  appName: 'Lottery',
  projectId: '977d43c7bca228f2d395312a8c05159b',
  ...WAGMI_CONFIG_PARAMS,
});

declare module wagmi {
  interface Register {
    config: typeof wagmiConfig;
  }
}
