// 0x9160965e0815051ff44631b3d121a111a10ead38
const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/a000e9d4c4a84f2da055fd797eab742f");

const walletaddress = "0x9160965e0815051ff44631b3d121a111a10ead38";
const walletAbi = [
	{
		"inputs": [],
		"name": "ContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "accountbalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getvalue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEatherContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEatheruser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setvalue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const contractInteraction = async ()=>{
    const walletContract = new ethers.Contract(walletaddress,walletAbi,provider);
    const number = await walletContract.getvalue();
    console.log('number value',String(number));

    const AccountBalance = await walletContract.accountbalance("0x41f5EAa06A0c03978060f395f67D32B443140097");
    const etherBalance = ethers.utils.formatEther(AccountBalance);
    console.log('account balance',etherBalance);

    const ContractBalance = await walletContract.ContractBalance();
    const waiBalance = ethers.utils.formatEther(ContractBalance);
    console.log('contract balance',waiBalance);
}
contractInteraction();