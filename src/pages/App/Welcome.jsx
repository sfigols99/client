import { verify_user, load } from '../utils/Auth';
import { Button, NoMetamask } from '../components/components';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


/* --------------------------------- */

const Welcome = (props) => {
    const [name, setName] = useState(" GRMNT's");

    const nav = useNavigate();

    /* --------------- Wallet connection --------------- */
    const [defaultAccount, setDefaultAccount] = useState("");
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [metamaskExists, setMetamaskExists] = useState(true);
    /* ------------------------------------------------- */
    
    const connect_wallet = async () => {
        const known_account = await verify_user();
        setMetamaskExists(true);
        const account = await load();
        if(known_account === "No_Metamask") {
            setMetamaskExists(false);
        }
        else if (known_account === true) {
            setConnButtonText("GRMNT'ED!");
            setDefaultAccount(account);
            console.log("It is added");
        }
        else if (known_account === false) {
            // trigger per què surti el popup de login
            
            nav("/login/"+account);
            console.log("It is not added");
        }
        setDefaultAccount(account);
    }
 
    return (
        <div className="justify-center items-center">
            <div className="text-center">
                <h1 className="py-12 text-7xl">Be smart</h1>
                <h1 className="py-9 text-6xl">Fasten your GRMNT's
                </h1>
            </div>
            <div className='flex items-center justify-center py-20'>
                <Button 
                    onClick={connect_wallet} 
                    text={connButtonText}
                />
            </div>
            
            <div className=''>
                <h3 className='text-center'>
                    {defaultAccount}
                </h3>
                <div>
                    <NoMetamask trigger={metamaskExists}/>
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