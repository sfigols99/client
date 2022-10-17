import { contract_instance } from './config';
import { load } from './Auth';

const set_timestamp = (num, unit) => {
    /**
     * 
     * En aquesta funció transformem el valor getDate() a block.timestamp (solidity)
     * El valor en solidity està contat en segons, mentre que a js està en milisegons
     * És per això que fem la divisió al final.  
     *  
    */

    const date_zero = new Date(0);
    if (unit === "DAYS") {
        date_zero.setDate(date_zero.getDate() + (num-1));
    } else if (unit === "MONTHS") {
        date_zero.setMonth(date_zero.getMonth() + (num-1));
    }
    console.log(date_zero)
    const result = Math.floor(date_zero.getTime() / 1000);
    return(result);
}

export const new_offer = async(amount, frequency, extension, contract_instance_duration, surety, cadastral_registration)  => {    
    // console.log("HOLA")
    const f2tmstp = set_timestamp(frequency, "DAYS");
    const ext2tmstp = set_timestamp(extension, "MONTHS");
    const dur2tmstp = set_timestamp(contract_instance_duration, "MONTHS");
    try {
        await contract_instance.new_offer(amount, f2tmstp, ext2tmstp, dur2tmstp, surety, cadastral_registration);
    } catch(error) {
        console.log(error.reason);
    }
}

export const pick_offer = async(offer_id) => {
    //console.log(offer_id);
    try {
        await contract_instance.pick_offer(offer_id);
    } catch(error) {
        console.log(error.reson);
    }
}

export const accept_rent_request = async(request_id) => {
    await contract_instance.accept_rent_request(request_id);   
}

const get_offer = async(value) => {
    let offer;
    try {
        offer = await contract_instance.get_offer(value);
    }
    catch(error) {
        console.log(error.reason);
    }
    return(offer);
}

export const get_offers = async(profile) => {
    const count_offers = await get_count_offers();
    
    const offers = []

    let aux_offer;

    const account = await load();

    if(profile === false) {
        for(let i = 0; i < count_offers; i++) {
            aux_offer = await get_offer(i);           
            if (aux_offer["5"] == true) { // if the offer is not ACTIVE it is not added to the array
                offers.push({
                    id_offer: i,
                    address: aux_offer["0"],
                    amount: aux_offer["1"].toNumber(),
                    frequency: aux_offer["2"].toNumber(),
                    extension: aux_offer["3"].toNumber(),
                    contract_duration: aux_offer["4"].toNumber(),
                    surety: aux_offer["6"].toNumber(),
                    registre_cadastral: aux_offer["7"]
                });           
            }   
        }    
    } else if (profile === true) {        
        for(let i = 0; i < count_offers; i++) {
            const aux_offer = await get_offer(i);
            /**
             * 
             * Comparem adreces passant-ho tot a lowercase(). La questió és que una
             * adreça té dos variants una amb checksum(algunes lletres amb majuscules)
             * i l'altra sense(la qual fem servir per comparar)
             * 
             * 
             *      * https://support.mycrypto.com/general-knowledge/ethereum-blockchain/ethereum-address-has-uppercase-and-lowercase-letters/
             *      ---------------------------------------------------------------------------------------------------------------------------
             * 
             * The one that is all lowercase is not checksummed, meaning that you 
             * could mistype a letter or number, send it off, and it would be lost 
             * forever. If you use the checksummed version and mistype it, it will 
             * tell you that it's an invalid address.
             * 
             */

            if (account === aux_offer["0"].toLowerCase() && aux_offer["5"]) {
                offers.push({
                    id_offer: i,
                    address: aux_offer["0"],
                    amount: aux_offer["1"].toNumber(),
                    frequency: aux_offer["2"].toNumber(),
                    extension: aux_offer["3"].toNumber(),
                    contract_duration: aux_offer["4"].toNumber(),
                    surety: aux_offer["6"].toNumber(),
                    registre_cadastral: aux_offer["7"]
                });
            } 
        }
    }   

    return(offers);
}

const get_count_offers = async() => {
    let count_offers; // = undefined;
    try {
        count_offers = await contract_instance.offer_count();
    } catch (error) { 
        console.log(error.reason)
    }
    
    return(count_offers.toNumber());
}

export const get_requests = async(id_offer) => {
    const length = await get_request_count();

    let requestants = [];

    let aux_req;

    for (let i = 0; i < length; i++) {
        try {
            aux_req = await get_request(i);
        } catch(error) {
            console.log(error.reason);
        }
        
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
    let request;
    try {
        request = await contract_instance.get_request(i);
    }
    catch(error) {
        console.log(error.reason);
    }
    return(request);
}

const get_request_count = async() => {
    let requests;
    try {
        requests = await contract_instance.request_count();
    }
    catch(error) {
        console.log(error.reason);
    }
    return(requests.toNumber());
}

export const get_user_offers = async(user_id) => {
    const count_offers = await get_count_offers();
    
    const address = load();

    const offers = []

    let aux_offer;

    for(let i = 0; i < count_offers; i++) {
        try {
            aux_offer = await get_offer(i);
        } catch (error){
            console.log(error.reason);  
        }

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