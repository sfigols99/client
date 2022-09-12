import { contract_instance } from "./config";

export const set_persona_juridica = (nif, den_social, adreca, dades_constitucio, apoderat) => {
    contract_instance.set_persona_juridica(nif, den_social, adreca, dades_constitucio, apoderat);
}

export const up_nif = (nif) => {
    contract_instance.up_nif(nif);
}

export const up_den_social = (den_social) => {
    contract_instance.up_den_social(den_social);
}

export const up_pj_adreca = (adreca) => {
    contract_instance.up_adreca(adreca);
}

export const up_dades_constitucio = (dades_constitucio) => {
    contract_instance.up_dades_constitucio(dades_constitucio);
}

export const up_apoderat = (apoderat) => {
    contract_instance.up_apoderat(apoderat)
}

export const get_pjuridica = async (address) => {
    const user = contract_instance.get_pjuridica(address);
    return(user);
}

export const get_pjuridiques = async () => {
    const users = contract_instance.get_pjuridiques();
    return(users);
}

export const pj_all_addresses = async () => {
    const quant = contract_instance.get_quant_addresses();
    return(quant);
}

export const pj_exists = async () => {
    const user_in_db = await contract_instance.is_user_added(address);
    return(user_in_db);
}

export const del_pj = () => {
    contract_instance.del_address(address);
}

export const is_persona_juridica = async(account) => {
    const user_in_db = await contract_instance.is_persona_juridica(account);
    return(user_in_db);
}