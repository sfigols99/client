import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_rent_params, pay_rent, pay_surety, cancel_contract, surety_back } from "../utils/Rent";
import { Button, Navbar } from '../components/components';

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

    const payment_handler = async(id_rent, message) => {
        await pay_rent(id_rent, message);
    }

    const surety_payment_handler = async(id_rent, message) => {
        await pay_surety(id_rent, message);
    }

    const cancel_handler = async(id_rent) => {
        await cancel_contract(id_rent);
    }

    const surety_back_handler = async(id_rent, accepted, message) => {
        await surety_back(id_rent, accepted, message);
    }

    const handle_rent = () => {
        get_rent_params(Number(id_rent))
            .then(rent_items => setRent(rent_items))
    }

    useEffect(() => {
        handle_rent();
    }, []);

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
                        <div className="p-5">
                            <Button text="Pay Rent" onClick={() => payment_handler(id_rent, "Payment")}/>
                        </div>
                        <div className="p-5">
                            <Button text="Pay Surety" onClick={() => surety_payment_handler(id_rent, "Surety")}/>
                        </div>
                        <div className="p-5">
                            <Button text="Cancel Contract" onClick={() => cancel_handler(id_rent)}/>
                        </div>
                        <div className="p-5">
                            <Button text="Surety Back" onClick={() => surety_back_handler(id_rent, true, "Hello")}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rent;