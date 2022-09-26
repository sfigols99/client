import { set_persona_juridica } from '../utils/Persona_Juridica';
import { set_persona_fisica } from '../utils/Persona_Fisica';
import { useState } from "react";
import { FormInput, Button } from '../components/components';
import { useNavigate } from 'react-router-dom';

const AddPersona = (props) => {
    const [pjValues, pjSetValues] = useState({
        // account: props.account,
        nif: "",
        den_social: "",
        location: "",
        den_con: "",
        admin: ""
    })

    const nav = useNavigate();

    const [pfValues, pfSetValues] = useState({
        // account: props.account,  // No ens cal inicialitzar-lo ja que el tenim de propietats
        dni: "",
        nom: "",
        location: "",
        email: ""
    })
    
    const add_persona = (e) => {
        e.preventDefault();
        if(props.is_persona_fisica) {
            set_persona_fisica(props.account, pfValues.dni, pfValues.nom, pfValues.location, pfValues.email)
        }
        else {
            set_persona_juridica(props.account, pjValues.nif, pjValues.den_social, pjValues.location, pjValues.den_con, pjValues.admin);
        }
        nav("/");
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
    
    const onChange = (e) => {
        // console.log(values);
        if(props.is_persona_fisica) {
            console.log(pfValues);
            pfSetValues({
                ...pfValues,
                [e.target.name]: e.target.value
            })
        }
        else {
            console.log(pjValues);
            pjSetValues({
                ...pjValues,
                [e.target.name]: e.target.value
            })
        }
    }

    return (
        <form onSubmit={add_persona}>
            {
                props.is_persona_fisica ?
                pf_inputs.map((input) => (
                    <FormInput 
                        key={input.id} 
                        name={input.name} 
                        label={input.label} 
                        placeholder={input.placeholder} 
                        disabled={input.disabled} 
                        value={input.value} 
                        onChange={onChange} 
                        errormessages={input.errormessages}/>
                ))
                :
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
                <Button text="Start" onClick={add_persona}/>
            </div>        
        </form>
    );
}

export default AddPersona;