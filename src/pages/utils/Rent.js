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

const contract = new ethers.Contract(contract_address, abi.abi, signer);

export const is_persona_fisica = async() => {
    const user_in_db = await contract.is_persona_fisica();
    return(user_in_db);
}

export const is_persona_juridica = async () => {
    const user_in_db = await contract.is_persona_juridica();
    return(user_in_db);
}

export const set_persona_fisica = (dni, nom, adreca, correu) => {
    contract.set_persona_fisica(dni, nom, adreca, correu);
}

export const set_persona_juridica = (nif, den_social, adreca, dades_constitucio, apoderat) => {
    contract.set_persona_juridica(nif, den_social, adreca, dades_constitucio, apoderat);
}