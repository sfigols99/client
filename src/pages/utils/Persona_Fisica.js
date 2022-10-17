import { contract_instance } from "./config";

export const set_persona_fisica = (dni, nom, adreca, correu) => {
    try {
        contract_instance.set_persona_fisica(dni, nom, adreca, correu);
    } catch(error) {
        console.log(error.reason);
    }
}

export const up_dni = (dni) => {
    try {
        contract_instance.up_dni(dni);
    } catch(error) {
        console.log(error.reason);
    }
}

export const up_nom = (nom) => {
    try {
        contract_instance.set_nom(nom);
    } catch(error) {
        console.log(error.reason);
    }
}

export const up_pf_adreca = (adreca) => {
    try {
        contract_instance.up_adreca(adreca);
    } catch(error) {
        console.log(error.reason);
    }
}

export const up_correu = (correu) => {
    try {
        contract_instance.set_correu(address, correu);
    } catch (error) {
        console.log(error);
    }
}

export const get_pfisica = async(address) => {
    let user;
    try {
        user = await contract_instance.get_pfisica(address, 0);
    } catch(error) {
        console.log(error.reason);
    }
    return(user);
}

export const get_pfisiques = async() => {
    let users;
    try {
        users = await contract_instance.get_pfisiques();
    } catch (error) {
        console.log(error.reason);
    }
    return(users)
}

export const pf_all_addresses = async() => {
    let quant;
    try {
        quant = await contract_instance.get_quant_addresses();
    } catch (error) {
        console.log(error.reason);
    }
    return(quant);
}

export const pf_exists = async(address) => {
    let user_in_db;
    try {
        user_in_db = await contract_instance.is_user_added(address);
    } catch(error) {
        console.log(error.reason);
    }
    return(user_in_db);
}

export const del_pf = (address) => {
    try {
        contract_instance.del_address(address);
    } catch(error) {
        console.log(error.reason);
    }
}

export const is_persona_fisica = (account) => {
    const user_in_db =  contract_instance.is_persona_fisica(account);
    return(user_in_db);
}