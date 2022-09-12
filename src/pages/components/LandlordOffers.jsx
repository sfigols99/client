import OfferItems from "./OfferItems";
import { get_offers } from "../utils/Offer";
import { useState, useEffect } from "react";

const LandlordOffers = () => {

    const [offers, setOffers] = useState([]);

    // per executar funcions get necessitem que l'usuari estigui logejat!!!
    
    const handle_offers = () => {
        get_offers(false)
            .then(offer_items => setOffers(offer_items))
    }

    useEffect(() => {
        handle_offers();      
    }, []);

    return(
        <div>
            <h1 className="py-6 text-center text-3xl">Landlord Offers</h1>
            <ul className="px-24 py-8">
                {
                    offers.map((item) => (
                        <OfferItems key={item.id_offer} id_offer={item.id_offer} address={item.address} amount={item.amount} frequency={item.frequency}/>
                    ))    
                }
            </ul>
        </div>
    );
}

export default LandlordOffers;