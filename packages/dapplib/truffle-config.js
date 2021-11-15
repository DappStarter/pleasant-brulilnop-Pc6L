require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain exact install globe force sword'; 
let testAccounts = [
"0xbf653214bc0e978a474cb381f6c8085d2db47902f9e45b7597a6f7c354aead4f",
"0xdc77555d8906b608bf9afb1105d952dd9b5f79d9f63ab0702b7774c3861e9bcd",
"0xa4c7dc2d00e2cf290b73da5e2699a33e3c2eb70cbcbc0408736e4893a6b592a3",
"0xf6001c37a0745c71fc19f74ce84ced2f5386b7e2dbfbf0e785f4fe344542e4c2",
"0xfab77adaca434f29bfbe97586f53e9e835420bc95426afd6a87c310c9ddf7b63",
"0xe71e5c2efa3accbd7f56a1d5653ff2cdcc897b065d3c0cd8c4af9a4ce3a28cea",
"0xcaa2ec6de7c7fa62449414cbb3040c262351dac29fdfede5758cf97e44ba0199",
"0xaa64514ee2932cff97633416a2ae55fc565e63958fc39348d1a33f5bfc8c09c3",
"0x152fd1de6c19209c1ef4149806bb0cea414f3de44957f893342d74396d86edde",
"0x77b6860690f34e7de9dd1ac5d8b83eba1b066eeb77e3b32470068e4d9ea01fc7"
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


