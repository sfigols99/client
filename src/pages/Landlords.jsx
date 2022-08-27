import { Footer, Navbar, LandlordOffers } from './components';

const Landlords = () => {
    return(
        <div className='bg-black text-white'>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div>
                <LandlordOffers/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Landlords;