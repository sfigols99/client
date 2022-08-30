import { ethers } from "ethers";

import abi from './Rent.json';

let signer;

try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
} catch (error) {
    console.log(error.reason);
}

const contract_address = "0x15C5a430ea467E685a61c3ff670E718E9ecE11e2";

export const contract_instance = new ethers.Contract(contract_address, abi.abi, signer);
