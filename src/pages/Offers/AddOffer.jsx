import { new_offer } from "../utils/Offer";
import { useState } from "react";
import { FormInput, Button, Navbar } from "../components/components";
import { Link, useNavigate } from "react-router-dom";

const Offer_Form = (props) => {
    let navigate = useNavigate();

    const [values, setValues] = useState({
        is_tenant: "",
        amount: "",
        frequency: "",
        extension: "",
        contract_duration: "",
        surety: ""
    })
    
    const add_offer = (e) => {
        e.preventDefault();
        new_offer(values.is_tenant, parseInt(values.amount), parseInt(values.frequency), parseInt(values.extension), parseInt(values.contract_duration), parseInt(values.surety));
        // Wait metamask response
        navigate("/my_profile");
    }

    const offer_inputs = [
        {
            id:1,
            name:"is_tenant",
            type:"checkbox",
            placeholder:"",
            label:"Tenant",
            value:"",
            checked:true
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
        if(e.target.type === "checkbox") {
            setValues({
                ...values,
                [e.target.name]: e.target.checked
            });            
        } else {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
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
                        checked={input.checked}
                    />
                )) 
            }
            <div className="p-4 flex items-center justify-center">
                <Link to="/my_profile" onClick={add_offer}>
                    <Button text="Start"/>
                </Link>
            </div>        
        </form>
    );
}

const AddOffer = (props) => {  // Si és la primera vegada que apreta el botó de login 
    //const [userIn, setUserIn] = useState(true);

    return (
        <div>
            <div className="border-b-4 border-black">
                <Navbar/>
            </div>
            <div className="bg-gray-400 inset-0 flex justify-center items-center p-20">
                <div className="bg-zinc-900 text-white p-4 rounded-lg">
                    <Offer_Form/>
                </div>
            </div>
        </div>
    );
}

export default AddOffer;