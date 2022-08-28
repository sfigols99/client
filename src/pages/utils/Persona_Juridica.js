/*

Aquest modul ajuda a interaccionar amb el contracte de Persones Juridiques

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
    "function set_persona_juridica(address _address, string _nif, string _den_social, string _adreca, string _dades_constitucio, string _apoderat)", 
    "function up_nif(address _address, string _nif)",
    "function up_den_social(address _address, string _den_social)",
    "function up_adreca(address _address, string _adreca)",
    "function up_dades_constitucio(address _address, string _dades_constitucio)",
    "function up_apoderat(address _address, string _apoderat)",
    "function get_pjuridica(address _address) view returns(string, string, string, string, string)",
    "function get_pjuridiques() view returns(address[])",
    "function get_quant_addresses() view returns(uint)",
    "function is_user_added(address _address) view returns(bool)",
    "function del_address(address _address)"  
];

const contract_address = "0xAdc8EE0a72380ee0E93f5BC1A0AFAc06Bcd02cb2";

const contract = new ethers.Contract(contract_address, abi, signer);

export const set_persona_juridica = (address, nif, den_social, adreca, dades_constitucio, apoderat) => {
    contract.set_persona_juridica(address, nif, den_social, adreca, dades_constitucio, apoderat);
}

export const up_nif = (address, nif) => {
    contract.up_nif(address, nif);
}

export const up_den_social = (address, den_social) => {
    contract.up_den_social(address, den_social);
}

export const up_pj_adreca = (address, adreca) => {
    contract.up_adreca(address, adreca);
}

export const up_dades_constitucio = (address, dades_constitucio) => {
    contract.up_dades_constitucio(address, dades_constitucio);
}

export const up_apoderat = (address, apoderat) => {
    contract.up_apoderat(address, apoderat)
}

export const get_pjuridica = async () => {
    const user = contract.get_pjuridica(address);
    return(user);
}

export const get_pjuridiques = async () => {
    const users = contract.get_pjuridiques();
    return(users);
}

export const pj_all_addresses = async () => {
    const quant = contract.get_quant_addresses();
    return(quant);
}

export const pj_exists = async () => {
    const user_in_db = await contract.is_user_added(address);
    return(user_in_db);
}

export const del_pj = () => {
    contract.del_address(address);
}