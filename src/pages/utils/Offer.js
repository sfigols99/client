import {contract_instance} from './config';

export const new_offer = async(is_landlord, amount, frequency, extension, contract_instance_duration, surety)  => {
    await contract_instance.new_offer(is_landlord, amount, frequency, extension, contract_instance_duration, surety);
}

export const pick_offer = async(offer_id) => {
    await contract_instance.accept_offer(offer_id);
}

export const accept_rent_request = async(request_id) => {
    await contract_instance.accept_rent_request(request_id);
}

export const get_offers = async() => {
    return(await contract_instance.offers());
}