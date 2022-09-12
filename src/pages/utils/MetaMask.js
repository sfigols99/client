// En aquest modul tractem les referències de metamask

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
        return("Error");
    }
};