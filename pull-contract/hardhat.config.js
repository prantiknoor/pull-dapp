require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ganache: {
      url: `${process.env.GANACHE_URL}`,
      accounts: [`${process.env.GANACHE_PRIVATE_KEY}`],
    } 
  }
};