const HDWalletProvider = require('truffle-hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    bitkub: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://rpc.bitkubchain.io/');
      },
      network_id: 96,
      gas: 5500000,
      gasPrice: 51000000000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },

  db: {
    enabled: false,
  },
};