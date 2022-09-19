import { contract_instance } from './config';
import { load } from './MetaMask';

export const new_offer = async(is_landlord, amount, frequency, extension, contract_instance_duration, surety)  => {
    await contract_instance.new_offer(is_landlord, amount, frequency, extension, contract_instance_duration, surety);
}

export const pick_offer = async(offer_id) => {
    //console.log(offer_id);
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

    let aux_offer;

    for(let i = 0; i < count_offers; i++) {
        aux_offer = await get_offer(i);

        if (aux_offer["6"] == true) { // if the offer is not ACTIVE it is not added to the array
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

    let aux_req;

    for (let i = 0; i < length; i++) {
        aux_req = await get_request(i);
        
        if(aux_req["1"].toNumber() === id_offer) {
            requestants.push({
                id_request: i,
                address: aux_req["0"]
            });
        }
    }

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

export const get_user_offers = async(user_id) => {
    const count_offers = await get_count_offers();
    
    const address = load();

    const offers = []

    let aux_offer;

    for(let i = 0; i < count_offers; i++) {
        
        aux_offer = await get_offer(i);

        if(address === aux_offer["1"]) {
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
    return(offers);
}