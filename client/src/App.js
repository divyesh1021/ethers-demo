import './App.css';
import {useState, useEffect} from "react";
import Get_value from './components/Get_value';
import Set_value from './components/Set_value';

const {ethers} = require("ethers");
function App() {
  const [state,setState] = useState({provider:null,signer:null,contract:null});


  useEffect(()=>{
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
    const Writecontract = async()=>{
      const walletaddress = "0x9160965e0815051ff44631b3d121a111a10ead38";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts",[]);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletaddress,walletAbi,signer);
      // await contract.setvalue(3); //Set value 
      // await contract.sendEatherContract({value:ethers.utils.parseEther("0.1")}) //send eather contract address
      // await contract.sendEatheruser("0x3B5B75FC4E954C33e25652CE96350A4f60a7A435",{value:ethers.utils.parseEther("0.01")}); //send eather contract address to other user account
      setState({provider,signer,contract}); 
    }
    Writecontract();
  },[]);
  // console.log(state);
  return <div className="App">
    <Get_value state={state}></Get_value>
    <Set_value state={state}></Set_value>
  </div>
}

export default App;
