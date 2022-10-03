import { contract_instance } from "./config";

export const set_persona_juridica = async(nif, den_social, adreca, dades_constitucio, apoderat) => {
    try {
        contract_instance.set_persona_juridica(nif, den_social, adreca, dades_constitucio, apoderat);
    } catch(error) {
        console.log(error.reason);
    }
}

export const up_nif = (nif) => {
    try {
        contract_instance.up_nif(nif);
    } catch(error) {
        console.log(error.reason);
    }
    
}

export const up_den_social = (den_social) => {
    try {
        contract_instance.up_den_social(den_social);
    } catch(error) {
        console.log(error.reason);
    }    
}

export const up_pj_adreca = (adreca) => {
    try{
        contract_instance.up_adreca(adreca);
    } catch(error) {
        console.log(error.reason);
    }  
}

export const up_dades_constitucio = (dades_constitucio) => {
    try {
        contract_instance.up_dades_constitucio(dades_constitucio);
    } catch(error) {
        console.log(error.reason);
    }
}

export const up_apoderat = (apoderat) => {
    try {
        contract_instance.up_apoderat(apoderat)
    } catch(error) {
        console.log(error.reason);
    } 
}

export const get_pjuridica = async (address) => {
    let user;
    try {
        user = await contract_instance.get_pjuridica(address);
    } catch(error) {
        console.log(error.reason);
    }
    return(user);
}

export const get_pjuridiques = async () => {
    let users;
    try{
        users = contract_instance.get_pjuridiques();
    } catch(error) {
        console.log(error.reason);
    }
    return(users);
}

export const pj_all_addresses = async () => {
    let quant;
    try {
        quant = contract_instance.get_quant_addresses();
    } catch(error) {
        console.log(error.reason)
    }
    return(quant);
}

export const pj_exists = async () => {
    let user_in_db;
    
    try {
        user_in_db = await contract_instance.is_user_added(address);
    } catch(error) {
        console.log(error.reason);
    }
    return(user_in_db);
}

export const del_pj = () => {
    try {
        contract_instance.del_address(address);
    } catch (error) {
        console.log(error.reason);
    }
}

export const is_persona_juridica = async(account) => {
    const user_in_db = await contract_instance.is_persona_juridica(account);
    return(user_in_db);
}