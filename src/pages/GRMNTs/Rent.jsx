import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_rent_params } from "../utils/Rent";
import { Button } from '../components/components';

const Rent = (props) => {
    const {id_rent} = useParams();
    
    const [rent, setRent] = useState();

    const handle_rent = () => {
        get_rent_params(Number(id_rent))
            .then(rent_items => setRent(rent_items))
    }

    useEffect(() => {
        handle_rent();
    }, []);

    return(
        <div>
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
                <h1 className="p-2 px-10">Extension: {rent.extension}</h1>
                <h1 className="p-2 px-10">Surety: {rent.surety}</h1>
                <div className="flex justify-center items-center">
                    <div className="p-5">
                        <Button text="Pay Rent"/>
                    </div>
                    <div className="p-5">
                        <Button text="Pay Surety"/>
                    </div>
                    <div className="p-5">
                        <Button text="Cancel Contract"/>
                    </div>
                    <div className="p-5">
                        <Button text="Surety Back"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rent;