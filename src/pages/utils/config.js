import { ethers } from "ethers";

import abi from './Rent.json';

export let signer = undefined;

try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
} catch (error) {
    console.log(error.reason);
}

const contract_address = "0xE3FA5c1d414ed544a00C7079BeBC99347e87105f";

export const contract_instance = new ethers.Contract(contract_address, abi.abi, signer);

