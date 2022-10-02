// En aquest modul tractem les referències de metamask
import { is_persona_fisica } from "./Persona_Fisica";
import { is_persona_juridica } from "./Persona_Juridica";

export const load = async () => {
    try {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({  // retorna un array amb les wallets
                method: 'eth_requestAccounts'     
            });
            return(accounts[0]);
        } else {
            return("No_Metamask");
        }
    }
    catch (error) {  // deixem el try catch ja que estem aprenent a fer la interacció amb W3 i metamask
        return("Error")
    }
};

export const verify_user = async() => {
    const account = await load();
    if(account === "No_Metamask") {
        return("No_Metamask")
    }
    else if (await is_persona_fisica(account) || await is_persona_juridica(account)) {
        return(true);
    }
    else {
        return(false);
    }
}