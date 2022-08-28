import { useState } from "react";
import FormPersonaFisica from "./FormPersonaFisica";
import FormPersonaJuridica from "./FormPersonaJuridica";
import { Button } from './subcomponents/subcomponents';
import { AiOutlineClose } from 'react-icons/ai';

const Login = (props) => {  // Si és la primera vegada que apreta el botó de login 
    const [userType, setUserType] = useState(true);
    //const [userIn, setUserIn] = useState(true);

    return (props.trigger) ? 
        "" 
    : 
        (
        <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-zinc-900 text-white p-4 rounded-lg">
                <div className="flex justify-between items-end p-4">
                    <button>
                        <AiOutlineClose/>
                    </button>
                    
                    <Button onClick={() => setUserType(!userType)} text={
                        (userType) ? "Set Enterprise registration" : "Set User registration"
                    } 
                    genericClass="p-2 py-4 grid gap-8 items-start justify-center"/>
                </div>
                <h1 className="text-2xl py-4 px-2">
                    New user here! 
                </h1>
                <h2 className="text-xl p-2">
                    If you want to start at GRMNT, write your information below...
                </h2>
                { 
                    (userType) ? <FormPersonaFisica account={props.account}/> : <FormPersonaJuridica account={props.account}/> 
                }
            </div>
        </div>
    );
}

export default Login;
