import { new_offer } from "../utils/Offer";
import { useState } from "react";
import { FormInput, Button } from "./subcomponents/subcomponents";

const Offer_Form = (props) => {
    const [values, setValues] = useState({
        is_landlord: "",
        amount: "",
        frequency: "",
        extension: "",
        contract_duration: "",
        surety: ""
    })
    
    const add_offer = (e) => {
        e.preventDefault();
        new_offer(values.is_landlord, parseInt(values.amount), parseInt(values.frequency), parseInt(values.extension), parseInt(values.contract_duration), parseInt(values.surety));
    }

    const offer_inputs = [
        {
            id:1,
            name:"is_landlord",
            type:"checkbox",
            placeholder:"",
            label:"Landlord",
            value:""
        },
        {
            id:2,
            name:"amount",
            type:"text",
            placeholder:"3",
            label:"Amount",
            disabled: false,
            errormessages: "",
            required: true,
            unit:"ETH"
        },
        {
            id:3,
            name:"frequency",
            type:"text",
            placeholder:"30",
            label:"Frequency",
            disabled: false,
            errormessages: "",
            required: true, 
            unit:"DAYS"
        },
        {
            id:4,
            name:"extension",
            type:"text",
            placeholder:"120",
            label:"Extension",
            disabled: false,
            errormessages: "",
            required: true,
            unit:"DAYS"
        },
        {
            id:5,
            name:"contract_duration",
            type:"text",
            placeholder:"1300",
            label:"Contract Duration",
            disabled: false,
            errormessages: "",
            required: true,
            unit:"DAYS"
        },
        {
            id:6,
            name:"surety",
            type:"text",
            placeholder: "6",
            label:"Surety",
            disabled: false,
            errormessages: "",
            unit:"ETH"
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
        <form onSubmit={add_offer}>
            {
                offer_inputs.map((input) => (
                    <FormInput 
                        key={input.id} 
                        name={input.name} 
                        type={input.type}
                        label={input.label} 
                        placeholder={input.placeholder} 
                        value={input.value} 
                        onChange={onChange}
                        errormessages={input.errormessages}
                        units={input.unit}
                    />
                )) 
            }
            <div className="p-4 flex items-center justify-center">
                <Button text="Start" onClick={add_offer}/>
            </div>        
        </form>
    );
}

const Add_Offer = (props) => {  // Si és la primera vegada que apreta el botó de login 
    //const [userIn, setUserIn] = useState(true);

    return (props.trigger) ? 
        "" 
    : 
        (
        <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-zinc-900 text-white p-4 rounded-lg">
                <Offer_Form/>
            </div>
        </div>
    );
}

export default Add_Offer;
