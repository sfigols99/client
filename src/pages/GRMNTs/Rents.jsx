import { useEffect, useState } from "react";
import { get_rents } from "../utils/Rent";
import { GrmntItems} from "./grmnts";

const Rents = (props) => {

    const [rents, setRents] = useState([]);

    const handle_rents = () => {
        get_rents(props.account)
            .then(rents_items => setRents(rents_items))
    }

    useEffect(() => {
        handle_rents();
    }, []);

    return(
        <div>
            <ul className="px-24 py-8">
                {
                    rents.map((input) => (
                        <GrmntItems 
                            key={input.id_rent} 
                            id_rent={input.id_rent}
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