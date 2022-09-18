import { load } from '../utils/MetaMask';
import { Button, NoMetamask } from '../components/components';
import { Login } from '../Login/login';
import { useState } from "react";
import { AddOffer } from '../Offers/offers';

/* ------ APIS dels contractes ------ */
import { is_persona_fisica } from '../utils/Persona_Fisica';
import { is_persona_juridica } from '../utils/Persona_Juridica';
/* --------------------------------- */

const Welcome = () => {
    const [name, setName] = useState(" GRMNT's");

    /* --------------- Wallet connection --------------- */
    const [defaultAccount, setDefaultAccount] = useState("");
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [userAdded, setUserAdded] = useState(true);
    const [metamaskExists, setMetamaskExists] = useState(true);
    const [offer, setOffer] = useState(true);
    /* ------------------------------------------------- */
 
    const connect_wallet = async () => {
        const account = await load();
        setMetamaskExists(true);
        if(account === "No_Metamask") {
            setMetamaskExists(false);
        }
        else if (await is_persona_fisica(account) || await is_persona_juridica(account)) {
            setUserAdded(true);
            setConnButtonText("GRMNT'ED!");
            console.log("It is added");
        }
        else {
            // trigger per què surti el popup de login
            console.log(account);
            setUserAdded(false);
            console.log("It is not added");
        }
        setDefaultAccount(account);
    }

    const manage_offer = async () => {
        setOffer(false);
    }
 
    return (
        <div className="justify-center items-center">
            <div className="text-center">
                <h1 className="py-12 text-7xl">Be smart</h1>
                <h1 className="py-9 text-6xl">Fasten your   
                    <a onMouseEnter={() => {setName(" Agreements")}} onMouseLeave={() => {setName(" GRMNT's")}}>
                         GRMNT's
                    </a>
                </h1>
            </div>
            <div className='flex items-center justify-center py-20'>
                <Button 
                    onClick={connect_wallet} 
                    text={"Connect Wallet"}
                />
            </div>
            <div  className='flex items-center justify-center py-20'>
                <Button
                    onClick={manage_offer}
                    text={"Add Offer"}
                />
            </div>
            
            <div className=''>
                <h3 className='text-center'>
                    {defaultAccount}
                </h3>
                <div>
                    <NoMetamask trigger={metamaskExists}/>
                </div>
                <div>
                    <Login trigger={userAdded} account={defaultAccount}/>
                </div>
                <div>
                    <AddOffer trigger={offer}/>
                </div>
            </div>
            <div className="py-32 items-center justify-center">
                <div className="text-center">
                    <h1 className="py-8 text-2xl">GRMNT is a dapp that <a className="px-2 text-3xl text-orange-600 italic">ENSURES</a> renting procedures and payments!</h1>
                </div>
            </div>
        </div>
    );
}

export default Welcome;