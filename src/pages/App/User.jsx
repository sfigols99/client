import { Navbar } from "../components/components";
import { load } from "../utils/Auth";
import { useState, useEffect } from "react";
import { is_persona_fisica, get_pfisica } from "../utils/Persona_Fisica";
import { is_persona_juridica, get_pjuridica } from "../utils/Persona_Juridica";


const User = () => {
    
    const [pf, setPf] = useState();
    const [user, setUser] = useState([]);

    const handle_user = async() => {
        const account = await load();
        if (await is_persona_fisica(account)) {
            setPf(true);
            setUser(await get_pfisica(account));
        } else if( await is_persona_juridica(account)) {
            setPf(false);
            setUser(await get_pjuridica(account))
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
                <div className="text-white p-20">
                    {
                        pf ?
                        <div>
                            <h1 className="p-3">Address: {user[0]}</h1>
                            <h1 className="p-3">DNI: {user[1]}</h1>
                            <h1 className="p-3">Name: {user[2]}</h1>
                            <h1 className="p-3">Location: {user[3]}</h1>
                            <h1 className="p-3">Email: {user[4]}</h1>
                        </div>
                        :
                        <div>
                            <h1 className="p-3">Address: {user[0]}</h1>
                            <h1 className="p-3">NIF: {user[1]}</h1>
                            <h1 className="p-3">Social Denomination: {user[2]}</h1>
                            <h1 className="p-3">Location: {user[3]}</h1>
                            <h1 className="p-3">Email: {user[4]}</h1>
                            <h1 className="p-3">Administrator: {user[5]}</h1>
                        </div>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default User;