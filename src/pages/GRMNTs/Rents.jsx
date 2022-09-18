import { useEffect, useState } from "react";
import { get_rents } from "../utils/Rent";
import { GrmntItems} from "./grmnts";

const Rents = () => {

    const [rents, setRents] = useState([]);

    const handle_rents = () => {
        get_rents()
            .then(rents_items => setRents(rents_items))
    }

    useEffect(() => {
        handle_rents();
    }, []);

    return(
        <div>
            <h1 className="py-6 text-center text-3xl" >GRMNT's</h1>
            <ul className="px-24 py-8">
                {
                    rents.map((input) => (
                        <GrmntItems 
                            key={input.id_rent} 
                            tenant={input.tenant} 
                            landlord={input.landlord} 
                            frequency={input.frequency} 
                            amount={input.amount}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Rents;