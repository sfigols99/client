import { contract_instance } from "./config";

////// Gets

const get_rent = async(id) => {
    const rent = await contract_instance.get_rent(id);
    return(rent);
}

const get_rent_count = async() => {
    const rent_count = await contract_instance.rent_count();
    return(rent_count.toNumber());
}

export const get_rent_params = async(id) => {
    const rent = await get_rent(id);
    
    //console.log(rent);

    return{
        tenant: rent["0"],
        landlord: rent["1"],
        frequency: rent["2"].toNumber(),
        last_payment: rent["3"].toNumber(),
        contract_end: rent["4"].toNumber(),
        amount: rent["5"].toNumber(),
        state: rent["6"],
        extension: rent["7"].toNumber(),
        surety: rent["9"].toNumber()
    }
} 

export const get_rents = async() => {
    const rent_count = await get_rent_count();
        
    const rents = [];

    let aux_rent;
    for (let i = 0; i < rent_count; i++) {
        aux_rent = await get_rent(i);
        rents.push({
            id_rent: i,
            tenant: aux_rent["0"],
            landlord: aux_rent["1"],
            frequency: aux_rent["2"].toNumber(),
            last_payment: aux_rent["3"].toNumber(),
            contract_end: aux_rent["4"].toNumber(),
            amount: aux_rent["5"].toNumber(),
            extension: aux_rent["7"].toNumber(),
            surety: aux_rent["9"].toNumber(),
        })
    }

    return(rents);
}

//// Rent functions

export const pay_rent = async(id_rent, message) => {
    // Do transfer with ethers js
    await contract_instance.pay_rent(id_rent, message);
}

export const pay_surety = async(id_rent, message) => {
    // Do transfer with ethers js
    await contract_instance.pay_surety(id_rent, message);
}

export const cancel_contract = async(id_rent) => {
    await contract_instance.cancel_rent(id_rent);
}

export const surety_back = async(id_rent, is_accepted, message) => {
    await contract_instance.surety_back(id_rent, is_accepted, message);
}

// Metamask Transfers