require('dotenv').config();
require('./configs/dayjs.config');
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';
import { boolean } from 'boolean';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
      viaIR: true,
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
      url: 'http://localhost:8545',
      mining: {
        auto: true,
      },
    },
    sepolia: {
      chainId: 11155111,
      url: 'https://rpc.sepolia.org',
      accounts: [process.env.SEPOLIA_OWNER_PRIVATE_KEY!],
    },
  },
  gasReporter: {
    enabled: boolean(process.env.ENABLE_GAS_REPORTER!),
    // coinmarketcap: process.env.COIN_MARKET_CAP_API_KEY,
  },
  etherscan: { apiKey: process.env.ETHERSCAN_API_KEY, enabled: true },
  defaultNetwork: 'hardhat',
};

export default config;
