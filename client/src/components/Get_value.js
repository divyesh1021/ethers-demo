import { ethers } from "ethers";
import { useState } from "react";
const Get_value = ({state})=>{
    const [balance,setbalance] = useState('')
    const [acc_balance,acc_setbalance] = useState('')

    const read = async ()=>{
        const {contract} = state
        const cont_bal = await contract.ContractBalance();
        const cont_bal_eth = ethers.utils.formatEther(cont_bal);
        setbalance(cont_bal_eth);
    }

    const acc_bal =async () =>{
        const {contract} = state
        const acc_bal = await contract.accountbalance("0x41f5EAa06A0c03978060f395f67D32B443140097");
        const acc_bal_eth = ethers.utils.formatEther(acc_bal);
        acc_setbalance(acc_bal_eth);
    }
    return( <>
    <p>Contract Balance : {balance} </p>
    <p>Account Balance : {acc_balance} </p>
    <button type="button" id="value" onClick={read}>Get-Value</button>
    <button type="button" id="acc_value" onClick={acc_bal}>Get-Acc-Bal</button>
    </>);
}

export default Get_value;