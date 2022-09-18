import { ethers } from "ethers";

import abi from './Rent.json';

let signer = "";

try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
} catch (error) {
    console.log(error.reason);
}

const contract_address = "0xECDd6a38c25eF94D1fAEE7F2fD41A3255E940801";

export const contract_instance = new ethers.Contract(contract_address, abi.abi, signer);

