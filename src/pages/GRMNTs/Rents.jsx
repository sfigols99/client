import { useEffect, useState } from "react";
import { get_rents, unset_timestamp } from "../utils/Rent";
import { GrmntItems} from "./grmnts";
import { PropagateLoader } from "react-spinners";

const Rents = (props) => {

    const [rents, setRents] = useState([]);
    const [loading, setLoading] = useState(true);

    const handle_rents = () => {
        get_rents(props.account)
            .then(rents_items => setRents(rents_items))
                .then(() => {
                    if(rents) {
                        setLoading(false)
                }
            }
        )
    }

    useEffect(() => {
        handle_rents();
    }, []);

    return(
        <div className="px-24 py-8">
            {
                loading ?
                <div className="flex justify-center items-center">
                    <PropagateLoader color="#FFFFFF"/>
                </div> :
                <ul className="">
                {
                    rents.map((input) => (
                        <GrmntItems 
                            key={input.id_rent} 
                            id_rent={input.id_rent}
                            tenant={input.tenant} 
                            landlord={input.landlord} 
                            frequency={unset_timestamp(input.frequency, "DAYS")} 
                            amount={input.amount}
                        />
                    ))
                }
            </ul>
            }
        </div>
    )
}

export default Rents;