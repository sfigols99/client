import OfferItems from "./OfferItems";
import { get_offers } from "../utils/Offer";
import { useState, useEffect } from "react";

const OffersComp = (props) => {

    const [offers, setOffers] = useState([]);

    const handle_offers = () => {
        get_offers(props.is_tenant)
            .then(offer_items => setOffers(offer_items))
    }

    useEffect(() => {
        handle_offers();      
    }, []);

    return(
        <div>
            <h1 className="py-6 text-center text-3xl">
                {
                    (props.is_tenant) ?
                        <span>Tenant Offers</span>
                    :
                        <span>Landlord Offers</span>
                }             
            </h1>
            <ul className="px-24 py-8">
                {
                    offers.map((item) => (
                        <OfferItems key={item.id_offer} address={item.address} amount={item.amount} frequency={item.frequency} comments={item.comments}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default OffersComp;