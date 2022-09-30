import { load } from "./Auth";
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

const unset_timestamp = (timestamp, unit) => {
    const time = new Date(timestamp * 1000);
    let days;
    if (unit === "DAYS") {
        days = time.getDate();
    }
    else if (unit === "MONTHS") {
        days = time.getMonth();
    }

    return days;
}

export const get_rent_params = async(id) => {
    const rent = await get_rent(id);

    const frequency = unset_timestamp(rent["2"].toNumber(), "DAYS");
    const last_payment = new Date(rent["3"].toNumber() * 1000).toString().slice(0,15);
    const contract_end = unset_timestamp(rent["4"].toNumber(), "MONTHS")
    const extension = unset_timestamp(rent["7"].toNumber(), "MONTHS")


    return{
        tenant: rent["0"],
        landlord: rent["1"],
        frequency: frequency,
        last_payment: last_payment, // De data a timestamp
        contract_end: contract_end, // De data a timestamp
        amount: rent["5"].toNumber(),
        state: rent["6"],
        extension: extension, // Com amb freqüencia però obtenir dies totals (definim màxim mig any) Finalitat igual que freqüencia
        surety: rent["9"].toNumber()
    }
} 

export const get_rents = async(all_accounts) => {
    const rent_count = await get_rent_count();

    const rents = [];

    let aux_rent;

    const account = await load();

    if(all_accounts === false) {
        for (let i = 0; i < rent_count; i++) {
            aux_rent = await get_rent(i);
            if(aux_rent["6"] != 4) {
                rents.push({
                    id_rent: i,
                    tenant: aux_rent["0"],
                    landlord: aux_rent["1"],
                    frequency: aux_rent["2"].toNumber(),
                    last_payment: aux_rent["3"].toNumber(),
                    contract_end: aux_rent["4"].toNumber(),
                    amount: aux_rent["5"].toNumber(),
                    state: aux_rent["6"],
                    extension: aux_rent["7"].toNumber(),
                    surety: aux_rent["9"].toNumber(),
                })
            }
        }
    } else {
        for (let i = 0; i < rent_count; i++) {
            aux_rent = await get_rent(i); // Arreglar!!!! lower case -> No cal! És un format acceptat (es veu que si hi ha majuscules es que s'hi ha aplicat un checksum)
            if((aux_rent["1"].toLowerCase() === account || aux_rent["0"].toLowerCase() === account.toLowerCase()) && aux_rent["6"] != 4) {
                rents.push({
                    id_rent: i,
                    tenant: aux_rent["0"],
                    landlord: aux_rent["1"],
                    frequency: aux_rent["2"].toNumber(),
                    last_payment: aux_rent["3"].toNumber(),
                    contract_end: aux_rent["4"].toNumber(),
                    amount: aux_rent["5"].toNumber(),
                    state: aux_rent["6"],
                    extension: aux_rent["7"].toNumber(),
                    surety: aux_rent["9"].toNumber(),
                })
            }
        }
    }
    

    return(rents);
}

//// Rent functions

export const pay_rent = async(id_rent, message) => {
    // Do transfer with ethers js and Metamask
    await contract_instance.pay_rent(id_rent, message);
}

export const pay_surety = async(id_rent, message) => {
    // Do transfer with ethers js and Metamask
    await contract_instance.pay_surety(id_rent, message);
}

export const cancel_contract = async(id_rent) => {
    await contract_instance.cancel_rent(id_rent);
}

export const surety_back = async(id_rent, is_accepted, message) => {
    await contract_instance.surety_back(id_rent, is_accepted, message);
}