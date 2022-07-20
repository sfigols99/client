import React from 'react';
import { load } from '../utils/funcs';
import Button from './Button';
import Login from './Login';
import { useState } from "react";

/* ------ APIS dels contractes ------ */
import { /*set_persona_fisica, up_dni, up_correu, up_pf_adreca, up_nom, get_pfisica, get_pfisiques, pf_all_addresses, */ pf_exists /*, del_pf */ } from '../utils/Persona_Fisica';
/* --------------------------------- */

const Welcome = () => {
    const [name, setName] = useState(" GRMNT's");

    /* --------------- Wallet connection --------------- */
    const [defaultAccount, setDefaultAccount] = useState("");
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [userAdded, setUserAdded] = useState(true);
    /* ------------------------------------------------- */
 
    const connect_wallet = async () => {
        const account = await load();
        if ( await pf_exists(account) == true ) {
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
            <Button 
                onClick={connect_wallet} 
                connButtonText={connButtonText}
                icon = {
                    <span className="flex items-center space-x-5 pr-4">   {/* Comentar d'on surt aquest logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </span>
                }
                genericClass="p-16 grid gap-8 items-start justify-center"  
            />
            <div className=''>
                <h3 className='text-center'>
                    {defaultAccount}
                </h3>
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