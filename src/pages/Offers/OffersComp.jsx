import OfferItems from "./OfferItems";
import { get_offers } from "../utils/Offer";
import { useState, useEffect } from "react";

const OffersComp = (props) => {

    const [offers, setOffers] = useState([]);

    const handle_offers = () => {
        get_offers(props.is_tenant, props.profile)
            .then(offer_items => setOffers(offer_items))
    }

    useEffect(() => {
        handle_offers();      
    }, []);

    return(
        <div>
            <ul className="px-24 py-8">
                {
                    offers.map((item) => (
                        <OfferItems profile={props.profile} key={item.id_offer} id_offer={item.id_offer} address={item.address} amount={item.amount} frequency={item.frequency} comments={item.comments}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default OffersComp;