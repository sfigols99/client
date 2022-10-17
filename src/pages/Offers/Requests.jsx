import { useState, useEffect } from "react";
import { accept_rent_request, get_requests } from "../utils/Offer";
import { Button, Navbar } from "../components/components";
import { useParams } from "react-router-dom";

const Requests = () => {

    const {id_offer} = useParams();

    const [requests, setRequests] = useState([]);

    const handle_requests = () => {
        get_requests(Number(id_offer))
            .then(request_items => setRequests(request_items)
        )   
    }

    const handle_accept_request = async(id) => {
        await accept_rent_request(id);
    }
    
    useEffect(() => {
        handle_requests();
    }, []);

    return(
        <div className="bg-black text-white">
            <div>
                <Navbar/>
            </div>
            <div className="flex-initial min-h-screen">
                <h1 className="py-6 text-center text-3xl" >Requests</h1>
                <ul className="px-24 py-8">
                    {
                        requests && requests.map((item, index) => (
                            <li key={index} className="flex justify-between p-4 border-t last:border-b">
                                {item.address}
                                <div>
                                    <Button text="Accept Request" onClick={() => handle_accept_request(item.id_request)}/>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Requests;