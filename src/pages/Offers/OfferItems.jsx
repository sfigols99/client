import { Button } from '../components/components';
import { pick_offer } from '../utils/Offer'; 
import { Link } from 'react-router-dom';

const OfferItems = (props) => {
    
    const request_offer = (id_offer) => {        
        pick_offer(id_offer);
    }
    
    return(
        <li className="py-4 border-t last:border-b">
            <div className="px-2">
                <div className="flow-root">
                    <Link to="/requests">
                        <h1 className="flex text-xl float-left">{props.address}</h1>
                    </Link>
                    {/* <span className="px-8 float-right">{props.comments}</span>   */}
                </div>
                <div className="p-2">
                    <h3>Quantity: {props.amount} ETH</h3>
                    <h3>Frequency: {props.frequency} DAYS</h3>
                </div>
            </div>
            <div className="flex justify-end items-end px-24 p-2">
                <Button onClick={() => request_offer(props.id_offer)} text={"Request"}/>
            </div>
        </li>
    )
}

export default OfferItems;