import Web3 from 'web3';
import dotenv from 'dotenv';
import {config} from "../../settings";
import { IApproveOptions, IApproveRetValues } from '../Model/Approve_Result';
//import {funcGetValidatorContractAddress} from "./getValidators";
//import Enumerable from 'linq';dotenv.config();
//let encoded_tx;

export const approve = async (params:IApproveOptions): Promise<IApproveRetValues> => {
    {
 /* //Call Validators Array */ 
 const web3 = new Web3(new Web3.providers.HttpProvider(config.MumbaiTestnet.providerURL)); 
 const buyDelegateABI = require('../../abi/validatorShareContract.json'); 
 let encoded_tx; 
 // Get contract instance 
 const validatorShareContract = new web3.eth.Contract(buyDelegateABI, params.tokendAdress);
 try { 
    //Capturing the receipt for "Encoded ABI" 
    const amount = web3.utils.toWei(params.amount!.toString(), 'ether'); 
    encoded_tx = await validatorShareContract.methods.approve(params.spenderAddress,web3.utils.toBN((Number(amount)<=0?'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff':Number(amount)))).encodeABI();
     //const info = await validatorShareContract.methods.validatorId().call(); 
     //console.log(info); 
     let retVal:IApproveRetValues = { To:Web3.utils.toChecksumAddress(params.tokendAdress), 
    // It's a validator Address used for transaction 
    Value: 0, 
    //It's a ether value required to make transaction on blockchain. 
    data:encoded_tx 
    //It's a input data required to perform the transaction. 
}
 return retVal; 
} catch (error) 
{ 
    throw (error); 
}
}
};
approve({
    tokendAdress:'0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae',
    spenderAddress:'0xA70db639f26d907B7744e72c44e9f0562f6fb6Ce',
    amount:1
})
.then(
    (result)=>(console.log(result.Value))
    )