import { contract_instance } from "./config";

export const set_persona_fisica = (address, dni, nom, adreca, correu) => {
    contract_instance.set_persona_fisica(address, dni, nom, adreca, correu);
    console.log("Added");
}

export const up_dni = (address, dni) => {
    contract_instance.up_dni(address, dni);
}

export const up_nom = (address, nom) => {
    contract_instance.set_nom(address, nom);
}

export const up_pf_adreca = (address, adreca) => {
    contract_instance.up_adreca(address, adreca);
}

export const up_correu = (address, correu) => {
    contract_instance.set_correu(address, correu);
}

export const get_pfisica = async(address) => {
    const user = await contract_instance.get_pfisica(address);
    return(user);
}

export const get_pfisiques = async() => {
    const users = await contract_instance.get_pfisiques();
    return(users)
}

export const pf_all_addresses = async() => {
    const quant = await contract_instance.get_quant_addresses();
    return(quant);
}

export const pf_exists = async(address) => {
    const user_in_db = await contract_instance.is_user_added(address);
    return(user_in_db);
}

export const del_pf = (address) => {
    contract_instance.del_address(address);
}