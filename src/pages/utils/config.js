import { ethers } from "ethers";

import abi from './Rent.json';

export let signer = undefined;

try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
} catch (error) {
    console.log(error.reason);
}

const contract_address = "0xEF4147F839d1b7cCab1aca56142D64445011e4Fb";

export const contract_instance = new ethers.Contract(contract_address, abi.abi, signer);

