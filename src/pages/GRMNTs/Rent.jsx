import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_rent_params, pay_rent, pay_surety, cancel_contract, surety_back } from "../utils/Rent";
import { Button, Navbar } from '../components/components';

const RentAction = (props) => {
    return(
        <div>
            {
            (props.condition)
            ?
                <div className="p-5">
                    <Button text={props.text} onClick={props.onClick}/>
                </div> 
            :
                ""
        }
        </div>
    )    
}

const Rent = (props) => {
    const {id_rent} = useParams();
    
    const [rent, setRent] = useState( {
        tenant: "",
        landlord: "",
        frequency: "",
        last_payment: "",
        contract_end: "",
        amount: "",
        state: "",
        extension: "",
        surety: ""
    });

    const timestamp_2_date = (value) => {
        const aux_date = new Date();
        date.setDate()

        return(date.getHours());
    }

    const payment_handler = async(id_rent, message) => {
        try{
            await pay_rent(id_rent, message);
        } catch (error) {
            console.log(error.reason)
        }
    }

    const surety_payment_handler = async(id_rent, message) => {
        try {
            await pay_surety(id_rent, message);
        } catch (error) {
            console.log(error.reason)
        }
    }

    const cancel_handler = async(id_rent) => {
        try {
            await cancel_contract(id_rent);
        }
        catch (error) {
            console.log(error.reason);
        }
    }

    const surety_back_handler = async(id_rent, accepted, message) => {
        try {
            await surety_back(id_rent, accepted, message);
        } catch (error) {
            console.log(error.reason);
        }
    }

    const handle_rent = () => {
        get_rent_params(Number(id_rent))
            .then(rent_items => setRent(rent_items))
    }

    // tenim rent

    useEffect(() => {
        handle_rent();
    }, []);

    
    console.log(rent.frequency);

    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="bg-black text-white">
                <div className="flex justify-center items-center py-10">
                    <h1 className="text-5xl">
                        Rent identificator - {id_rent}
                    </h1>
                </div>
                <div className="items-center">
                    <h1 className="p-2 px-10">Tenant Address: {rent.tenant}</h1>
                    <h1 className="p-2 px-10">Landlord Address: {rent.landlord}</h1>
                    <h1 className="p-2 px-10">Frequency: {rent.frequency}</h1>
                    <h1 className="p-2 px-10">Last Payment: {rent.last_payment}</h1>
                    <h1 className="p-2 px-10">Contract End: {rent.contract_end}</h1>
                    <h1 className="p-2 px-10">Amount: {rent.amount}</h1>
                    <h1 className="p-2 px-10">State: {rent.state}</h1>
                    <h1 className="p-2 px-10">Extension: {rent.extension}</h1>
                    <h1 className="p-2 px-10">Surety: {rent.surety}</h1>
                    <div className="flex justify-center items-center">                        
                        <RentAction text="Pay Rent" condition={(rent.state === 1) || (rent.state === 2)} onClick={() => payment_handler(id_rent, "Payment")}/>
                        <RentAction text="Pay Surety" condition={(rent.state === 0)} onClick={() => surety_payment_handler(id_rent, "Payment")}/>
                        <RentAction text="Cancel Contract" condition={rent.state === 1} onClick={() => cancel_handler(id_rent, "Payment")}/>
                        <RentAction text="Surety Back" condition={rent.state === 3} onClick={() => surety_back_handler(id_rent, "Payment")}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rent;