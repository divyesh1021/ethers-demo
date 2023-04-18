import { ethers } from "ethers";
import { useState } from "react";
const Set_value = ({state})=>{
    const [ether,Send_eather] = useState('');

    const write =async (event)=>{
        event.preventDefault();
        const {contract} = state;
        const add_eth_con = {value:ethers.utils.parseEther(ether)};
        const transaction = await contract.sendEatherContract(add_eth_con);
        await transaction.wait();
        // const transaction = await contract.
        // Send_eather(transaction);
    }
    return <>
    <form onSubmit={write}>
    <p>How Many Send Eather On Contract : {ether}</p>
    <input type="number" id="number" placeholder="Enter Amount" value={ether} onChange={(e)=>Send_eather(e.target.value)}></input>
    <button type="submit">Send Eather</button>
    </form>
    </>
}

export default Set_value;