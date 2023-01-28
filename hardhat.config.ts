import { config as dotEnvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/types";
dotEnvConfig();

import "@nomiclabs/hardhat-ethers";
import "hardhat-ethernal";

const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
const INFURA_KOVAN = process.env.INFURA_KOVAN;
const QUICK_NODE_API_KEY = process.env.QUICK_NODE_API_KEY;
const QUICK_NODE_TESTNET_API_KEY = process.env.QUICK_NODE_TESTNET_API_KEY;

const ETHERNAL_EMAIL = process.env.ETHERNAL_EMAIL || "";
const ETHERNAL_PASSWORD = process.env.ETHERNAL_PASSWORD || "";

const config: HardhatUserConfig = {
	defaultNetwork: "localhost",
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545",
		},
		hardhat: {
			// testnet
			// forking: {
			//   url: `https://solitary-quaint-putty.bsc-testnet.discover.quiknode.pro/${QUICK_NODE_TESTNET_API_KEY}`,
			// },
			forking: {
				// mainnet
				url: `https://wider-intensive-tree.bsc.discover.quiknode.pro/${QUICK_NODE_API_KEY}`,
			},
		},
		moralis: {
			url: `https://speedy-nodes-nyc.moralis.io/${MORALIS_API_KEY}/bsc/mainnet`,
			chainId: 56,
			gasPrice: 5000000000,
		},
		testnet: {
			url: "https://data-seed-prebsc-1-s3.binance.org:8545/",
			chainId: 97,
			gasPrice: 10000000000,
		},
		mainnet: {
			url: "https://bsc-dataseed1.binance.org/",
			chainId: 56,
			gasPrice: 5000000000,
		},
		rinkeby: {
			url: `https://rinkeby.infura.io/v3/${INFURA_KOVAN}`,
		},
		kovan: {
			url: `https://kovan.infura.io/v3/${INFURA_KOVAN}`,
		},
	},
	ethernal: {
		disableSync: false,
		disableTrace: false,
		disabled: false,
		uploadAst: true,
		email: ETHERNAL_EMAIL,
		password: ETHERNAL_PASSWORD,
	},
	solidity: {
		compilers: [
			{
				version: "0.8.7",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
		],
	},
};

export default config;
