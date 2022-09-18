import {contract_instance} from "./config";

const get_rent = async(id) => {
    const rent = await contract_instance.get_rent(id);
    return(rent);
}

const get_rent_count = async() => {
    const rent_count = await contract_instance.rent_count();
    return(rent_count.toNumber());
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