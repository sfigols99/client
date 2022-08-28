import React from 'react';
import { load } from '../utils/funcs';
import { Button } from './subcomponents/subcomponents';
import Login from './Login';
import No_Metamask from './No_Metamask';
import { useState } from "react";

/* ------ APIS dels contractes ------ */
import { is_persona_fisica, is_persona_juridica } from '../utils/Rent';
/* --------------------------------- */

const Welcome = () => {
    const [name, setName] = useState(" GRMNT's");

    /* --------------- Wallet connection --------------- */
    const [defaultAccount, setDefaultAccount] = useState("");
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [userAdded, setUserAdded] = useState(true);
    const [metamaskExists, setMetamaskExists] = useState(true);
    /* ------------------------------------------------- */
 
    const connect_wallet = async () => {
        const account = await load();
        setMetamaskExists(true);
        if(account === "No_Metamask") {
            setMetamaskExists(false);
        }
        else if (await is_persona_fisica() || await is_persona_juridica()) {
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
            
            <div className=''>
                <h3 className='text-center'>
                    {defaultAccount}
                </h3>
                <div>
                    <No_Metamask trigger={metamaskExists}/>
                </div>
                <div>
                    <Login trigger={userAdded} account={defaultAccount}/>
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