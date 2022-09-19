import { Navbar, Footer, Button } from '../components/components';
import { AddOffer } from '../Offers/offers';
import { Rents } from '../GRMNTs/grmnts';
import { useState } from 'react';
import { OffersComp } from '../Offers/offers';

const MyProfile = () => {
    
    const [offer, setOffer] = useState(true);
    
    const manage_offer = async () => {
        setOffer(false);
    }

    return(
        <div className='bg-black text-white'>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div className='flex items-center justify-center py-20'>
                <Button
                    onClick={manage_offer}
                    text={"Add Offer"}
                />
            </div>
            <div>
                <h1 className="py-6 text-center text-3xl">
                    Active Rents
                </h1>
                <Rents/>
            </div>
            <div>
            <h1 className="py-6 text-center text-3xl">
                    Active Offers
                </h1>
                <OffersComp/>
            </div>
            <div>
                <AddOffer trigger={offer}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default MyProfile;