import { set_persona_fisica } from "../utils/Persona_Fisica";
import { useState } from "react";
import FormInput from './FormInput';
import Button from "./Button";

const FormPersonaFisica = (props) => {
    const [values, setValues] = useState({
        // account: props.account,  // No ens cal inicialitzar-lo ja que el tenim de propietats
        dni: "",
        nom: "",
        location: "",
        email: ""
    })
    
    const add_persona_fisica = (e) => {
        e.preventDefault(); // Propietat que fa que no es recarregui la pàgina
        set_persona_fisica(props.account, values.dni, values.nom, values.location, values.email);
    }

    const onChange = (e) => {
        console.log(values);      
        setValues({
            ...values,
            [e.target.name]: e.target.value // "name" és el nom de l'item 
        });  // mitjançant use state hem d'actualitzar el valors quan canvien 
    }

    const pf_inputs = [
        {
            id:1,
            name:"account",
            type:"text",
            placeholder:"",
            label:"Address",
            value:props.account,
            disabled: true,
            errormessages: "",
            required: true
        },
        {
            id:2,
            name:"dni",
            type:"text",
            placeholder:"123456789Z",
            label:"DNI",
            disabled: false,
            errormessages: "",
            required: true
        },
        {
            id:3,
            name:"nom",
            type:"text",
            placeholder:"LeBron James",
            label:"Name",
            disabled: false,
            errormessages: "",
            required: true
        },
        {
            id:4,
            name:"location",
            type:"text",
            placeholder:"Barcelona",
            label:"Location",
            disabled: false,
            errormessages: "",
            required: true
        },
        {
            id:5,
            name:"email",
            type:"email",
            placeholder:"hello@example.com",
            label:"Email",
            disabled: false,
            errormessages: "",
            required: true
        }
    ];

    return (
        <div>
            <form onSubmit={add_persona_fisica}>
                {
                    pf_inputs.map((input) => (
                        <FormInput key={input.id} name={input.name} label={input.label} placeholder={input.placeholder} disabled={input.disabled} value={input.value} onChange={onChange}/>
                    ))
                }
                <Button connButtonText="Start" genericClass="p-4 grid gap-8 items-start justify-center" onClick={add_persona_fisica}/>
            </form>
            
        </div>
    );
}

export default FormPersonaFisica;