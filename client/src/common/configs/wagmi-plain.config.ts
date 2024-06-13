import { cookieStorage, createConfig, createStorage, http } from 'wagmi';
import { hardhat, sepolia } from 'wagmi/chains';

export const WAGMI_CONFIG_PARAMS = {
  chains: [sepolia, hardhat],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_RPC_URL!),
    [hardhat.id]: http(),
  },
  ssr: true,
  multiInjectedProviderDiscovery: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
} as const;

export const wagmiPlainConfig = createConfig(WAGMI_CONFIG_PARAMS);
