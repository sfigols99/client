import { ethers } from "ethers";

import abi from './Rent.json';

let signer;

try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
} catch (error) {
    console.log(error.reason);
}

const contract_address = "0x78e785d0A04Bdf76E7AFdb89a6E443c96278b04e";

export const contract_instance = new ethers.Contract(contract_address, abi.abi, signer);
