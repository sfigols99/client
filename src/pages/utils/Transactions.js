import { contract_instance } from "./config";

const get_length_transactions = () => {
    const transactions_length = contract_instance.transfer_count();
    
    return(transactions_length);
}

export const get_transactions = async(id_rent) => {
    const transfers = await contract_instance.get_transfers();
    const transfer_count = await get_length_transactions();
    
    let aux_transfer;
    const t = [];

    for (let i = 0; i < transfer_count; i++) {
        aux_transfer = transfers[i];
        
        if (aux_transfer["0"].toNumber() === id_rent){
            t.push({
                id_transfer: i,
                id_rent: aux_transfer["0"].toNumber(),
                amount: aux_transfer["1"].toNumber(),
                message: aux_transfer["2"]
            });
        }
    }
    return(t);
}  