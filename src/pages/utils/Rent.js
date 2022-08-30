import {contract_instance} from "./config";

export const is_persona_fisica = async(account) => {
    const user_in_db = await contract_instance.is_persona_fisica(account);
    return(user_in_db);
}

export const is_persona_juridica = async(account) => {
    const user_in_db = await contract_instance.is_persona_juridica(account);
    return(user_in_db);
}

export const set_persona_fisica = (dni, nom, adreca, correu) => {
    contract_instance.set_persona_fisica(dni, nom, adreca, correu);
}

export const set_persona_juridica = (nif, den_social, adreca, dades_constitucio, apoderat) => {
    contract_instance.set_persona_juridica(nif, den_social, adreca, dades_constitucio, apoderat);
}