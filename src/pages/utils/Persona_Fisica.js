/* 

Aqui tractem la interacció amb el contracte de Persones Fisiques 

*/

import { ethers } from "ethers";

let signer;

try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
} catch (error) {
    console.log(error.reason);
}

const abi = [
    "function set_persona_fisica(address _address, string _dni, string _nom, string _adreca, string _correu)",
    "function up_dni(address _address, string _dni)",
    "function up_nom(address _address, string _nom)",
    "function up_adreca(address _address, string _adreca)",
    "function up_correu(address _address, string _correu)",
    "function get_pfisica(address _address) view returns(string, string, string, string)",
    "function get_pfisiques() view returns(address[])",
    "function get_quant_addresses() view returns(uint)",
    "function is_user_added(address _address) view returns(bool)",
    "function del_address(address _address)"
];

const contract_address = "0xbcc91f07C43dEBf4d36e36526074c6c973334Ebd";

const contract = new ethers.Contract(contract_address, abi, signer);

export const set_persona_fisica = (address, dni, nom, adreca, correu) => {
    contract.set_persona_fisica(address, dni, nom, adreca, correu);
    console.log("Added");
}

export const up_dni = (address, dni) => {
    contract.up_dni(address, dni);
}

export const up_nom = (address, nom) => {
    contract.set_nom(address, nom);
}

export const up_pf_adreca = (address, adreca) => {
    contract.up_adreca(address, adreca);
}

export const up_correu = (address, correu) => {
    contract.set_correu(address, correu);
}

export const get_pfisica = async(address) => {
    const user = await contract.get_pfisica(address);
    return(user);
}

export const get_pfisiques = async() => {
    const users = await contract.get_pfisiques();
    return(users)
}

export const pf_all_addresses = async() => {
    const quant = await contract.get_quant_addresses();
    return(quant);
}

export const pf_exists = async(address) => {
    const user_in_db = await contract.is_user_added(address);
    return(user_in_db);
}

export const del_pf = (address) => {
    contract.del_address(address);
}