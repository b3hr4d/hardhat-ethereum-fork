const { config: dotEnvConfig } = require("dotenv");
dotEnvConfig();

require("@nomiclabs/hardhat-ethers");
require("hardhat-ethernal");

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const QUICK_NODE_API_KEY = process.env.QUICK_NODE_API_KEY;
const QUICK_NODE_TESTNET_API_KEY = process.env.QUICK_NODE_TESTNET_API_KEY;

const ETHERNAL_EMAIL = process.env.ETHERNAL_EMAIL || "";
const ETHERNAL_PASSWORD = process.env.ETHERNAL_PASSWORD || "";

/**
 * @type import('hardhat/config').HardhatUserConfig
 * https://hardhat.org/config/
 **/
module.exports = {
	networks: {
		hardhat: {
			forking: {
				// mainnet
				// url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
				// bsc mainnet
				url: `https://practical-methodical-snow.bsc.discover.quiknode.pro/${QUICK_NODE_API_KEY}`,
			},
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
};
