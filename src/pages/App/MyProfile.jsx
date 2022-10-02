import { Navbar, Footer, Button } from '../components/components';
import { OffersComp } from '../Offers/offers';
import { Rents } from '../GRMNTs/grmnts';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return(
        <div className='bg-black text-white'>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div className='flex justify-end px-20 pt-8'>
                <div className='p-3'>
                    <Link to="/user">
                        <Button text={"User Profile"}/> 
                    </Link>
                </div>
                <div className='p-3'>
                    <Link to="/add_offer">
                        <Button
                            text={"Add Offer"}
                        />
                    </Link>
                </div>
            </div>
            <div>
                <h1 className="py-6 text-center text-3xl">
                    Active Rents
                </h1>
                <Rents account={true}/>
            </div>
            <div>
            <h1 className="py-6 text-center text-3xl">
                    Active Offers
                </h1>
                <OffersComp profile={true}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default MyProfile;