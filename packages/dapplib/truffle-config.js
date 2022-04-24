require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strike deny noble smile hidden clock equal gesture'; 
let testAccounts = [
"0x04390543d53761d134de0bc7229b5597755c5d815d2d70c96d75ba381a6f70e5",
"0x61af7e5f95cdf1ec32514d0617609b909b9bad3641f0e8b363d0c1ae9c297429",
"0xffbc02c798b83a973c30724e2ae300c18fec7e7d5ff9b5f73e220f2070bfb6e7",
"0x45f3b50d00134a993eeb8ec2080e32a6664ce0343313981f5e3d788d07567b0f",
"0x7dbf5413154df5ae619bb21a1b5691b1cdc1c4a2d27c0469952cb4c9a60a16f7",
"0x984579907c62decbade32ef6ac706e4e1de4e7ea3b1c1dda8562e0d30670cf28",
"0xe6206543a5394e3e9ee51cce9327b2a7bbd0449a91bd59f7e4103a184e7dc0f9",
"0xf0f1c0c8b60f587805000d66dedf618cefe8241ab3a47de8c05839acf2c59228",
"0x9db5ae5dfab6c7bff1984506c51f6d09101c78714ef8df9981c9fac125ac7733",
"0xbe2e3797d60cfd72b78c288c84280fa623499fc354e96b7a0d7b8db3fe4e2a9e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


