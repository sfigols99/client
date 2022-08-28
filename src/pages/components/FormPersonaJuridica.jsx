import {set_persona_juridica} from '../utils/Rent';
import { useState } from "react";
import { FormInput, Button } from './subcomponents/subcomponents';

const FormPersonaJuridica = (props) => {
    const [values, setValues] = useState({
        // account: props.account,
        nif: "",
        den_social: "",
        location: "",
        den_con: "",
        admin: ""
    })
    
    const add_persona_juridica = (e) => {
        e.preventDefault();
        set_persona_juridica(props.account, values.nif, values.den_social, values.location, values.den_con, values.admin);
    }

    const pj_inputs = [
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
            name:"nif",
            type:"text",
            placeholder:"A123456789",
            label:"NIF",
            disabled: false,
            errormessages: "",
            required: true
        },
        {
            id:3,
            name:"den_social",
            type:"text",
            placeholder:"Enterprise S.A.",
            label:"Social Denomination",
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
            type:"text",
            placeholder:"hello@example.com",
            label:"Email",
            disabled: false,
            errormessages: "",
            required: true
        },
        {
            id:6,
            name:"admin",
            type:"text",
            placeholder:"Stephen Curry",
            label:"Administrator",
            disabled: false,
            errormessages: ""
        }
    ];
    
    const onChange = (e) => {
        console.log(values);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={add_persona_juridica}>
            {
                pj_inputs.map((input) => (
                    <FormInput 
                        key={input.id} 
                        name={input.name} 
                        label={input.label} 
                        placeholder={input.placeholder} 
                        value={input.value} 
                        onChange={onChange}
                        errormessages={input.errormessages}
                    />
                )) 
            }
            <div className="p-4 flex items-center justify-center">
                <Button text="Start" onClick={add_persona_juridica}/>
            </div>        
        </form>
    );
}

export default FormPersonaJuridica;