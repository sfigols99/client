import OfferItems from "./OfferItems";
import { get_offers } from "../utils/Offer";
import { useState, useEffect } from "react";
import { unset_timestamp } from "../utils/Rent";
import { PropagateLoader } from "react-spinners";

const OffersComp = (props) => {

    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handle_offers = () => {
        get_offers(props.is_tenant, props.profile)
            .then(offer_items => setOffers(offer_items))
                .then(() => {
                    if(offers) {
                        setLoading(false)
                }})
    }

    useEffect(() => {
        handle_offers();      
    }, []);

    return(
        <div className="px-24 py-8">
            {
                loading ?
                <div className="flex justify-center items-center">
                    <PropagateLoader color="#FFFFFF"/> 
                </div> :
                <ul>
                {
                    offers.map((item) => (
                        <OfferItems profile={props.profile} key={item.id_offer} id_offer={item.id_offer} address={item.address} amount={item.amount} frequency={unset_timestamp(item.frequency, "DAYS")} comments={item.comments}/>
                    ))
                }
                </ul>
            }
        </div>
    );
}

export default OffersComp;