// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract demo{
    uint number;
    function setvalue(uint _num) public {
        number = _num;
    }
    function getvalue()public view returns(uint){
        return number;
    }
    function sendEatherContract() public payable {
        
    }
    function ContractBalance() public view returns(uint) {
        return address(this).balance;
    }
    function sendEatheruser(address _user)public payable{
        payable(_user).transfer(msg.value);
    }
    function accountbalance(address _add)public view returns(uint){
        return (_add).balance;
    }
}