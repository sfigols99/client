import { useState, useEffect } from "react";
import { get_requests } from "../utils/Offer";

const Requests = () => {

    const [requests, setRequests] = useState();

    const handle_requests = () => {
        get_requests(0)
            .then(request_items => setRequests(request_items)
        )   
    }

    console.log(requests);
    
    useEffect(() => {
        handle_requests();
    }, []);

    return(
        <div>
            <h1 className="py-6 text-center text-3xl" >Requests</h1>
            <ul className="px-24 py-8">
                {
                    requests && requests.map((item) => (
                        <li>{item.address}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Requests;