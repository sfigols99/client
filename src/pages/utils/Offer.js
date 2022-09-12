import {contract_instance} from './config';

export const new_offer = async(is_landlord, amount, frequency, extension, contract_instance_duration, surety)  => {
    await contract_instance.new_offer(is_landlord, amount, frequency, extension, contract_instance_duration, surety);
}

export const pick_offer = async(offer_id) => {
    await contract_instance.pick_offer(offer_id);
}

export const accept_rent_request = async(request_id) => {
    await contract_instance.accept_rent_request(request_id);
}

const get_offer = async(value) => {
    const offer = await contract_instance.get_offer(value);
    return(offer);
}

export const get_offers = async(display_tenant) => {
    const count_offers = await get_count_offers();
    
    const offers = []

    for(let i = 0; i < count_offers; i++) {
        const aux_offer = await get_offer(i);

        if (display_tenant === true) {
            if (aux_offer["1"] === true) {
                offers.push({
                    id_offer: i,
                    address: aux_offer["0"],
                    is_tenant: aux_offer["1"],
                    amount: aux_offer["2"].toNumber(),
                    frequency: aux_offer["3"].toNumber(),
                    extension: aux_offer["4"].toNumber(),
                    contract_duration: aux_offer["5"].toNumber(),
                    surety: aux_offer["7"].toNumber(),
                });
            }            
        } else {
            if (aux_offer["1"] === false) {
                offers.push({
                    id_offer: i,
                    address: aux_offer["0"],
                    is_tenant: aux_offer["1"],
                    amount: aux_offer["2"].toNumber(),
                    frequency: aux_offer["3"].toNumber(),
                    extension: aux_offer["4"].toNumber(),
                    contract_duration: aux_offer["5"].toNumber(),
                    surety: aux_offer["7"].toNumber(),
                });
            }      
        }    
    }
    
    return(offers);
}

const get_count_offers = async() => {
    const count_offers = await contract_instance.offer_count();
    return(count_offers.toNumber());
}

export const get_requests = async(id_offer) => {
    const length = await get_request_count();
    
    let requestants = [];

    for (let i = 0; i <= length; i++) {
        const aux_req = await get_request(i);
        
        if(aux_req["1"].toNumber() === id_offer) {
            requestants.push({address: aux_req["0"]});
        }
    }
    console.log(requestants)
    return(requestants);
}

const get_request = async(i) => {
    const request = await contract_instance.get_request(i);
    return(request);
}

const get_request_count = async() => {
    const requests = await contract_instance.request_count();
    return(requests.toNumber());
}