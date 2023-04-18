const { ethers } = require("ethers"); // import ethers.js
const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545"); //connect a network

const queryBlockchain = async ()=>{
    const block = await provider.getBlockNumber();
    console.log('Block Number',block);
    const balance = await provider.getBalance("0xA93A2200370f3E950baa9690C43dfd4c018DF97C");
    console.log(balance);
    const balanceEather = ethers.utils.formatEther(balance);
    console.log(balanceEather);
}
queryBlockchain();