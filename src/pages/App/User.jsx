import { Navbar } from "../components/components";
import { load } from "../utils/Auth";
import { useState, useEffect } from "react";
import { is_persona_fisica, get_pfisica } from "../utils/Persona_Fisica";
import { is_persona_juridica, get_pjuridica } from "../utils/Persona_Juridica";
import UserComp from "./UserComp";


const User = () => {
    
    const [pf, setPf] = useState();
    const [user, setUser] = useState([]);
    const [userAccount, setUserAccount] = useState();

    const handle_user = async() => {
        const account = await load();
        setUserAccount(account);
        let persona;
        if (await is_persona_fisica(account)) {
            setPf(true);
            persona = await get_pfisica(account);
            setUser(persona);
        } else if( await is_persona_juridica(account)) {
            setPf(false);
            persona = await get_pjuridica(account);
            setUser(persona);
        }
    }
    
    useEffect(() => {
        handle_user();      
    }, []);

    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex-initial min-h-screen bg-black">
                <UserComp pf={pf} userAccount={userAccount} user={user}/>
            </div>
            
        </div>
    )
}

export default User;