import { contract_instance } from "./config";

export const set_persona_juridica = (address, nif, den_social, adreca, dades_constitucio, apoderat) => {
    contract_instance.set_persona_juridica(address, nif, den_social, adreca, dades_constitucio, apoderat);
}

export const up_nif = (address, nif) => {
    contract_instance.up_nif(address, nif);
}

export const up_den_social = (address, den_social) => {
    contract_instance.up_den_social(address, den_social);
}

export const up_pj_adreca = (address, adreca) => {
    contract_instance.up_adreca(address, adreca);
}

export const up_dades_constitucio = (address, dades_constitucio) => {
    contract_instance.up_dades_constitucio(address, dades_constitucio);
}

export const up_apoderat = (address, apoderat) => {
    contract_instance.up_apoderat(address, apoderat)
}

export const get_pjuridica = async () => {
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