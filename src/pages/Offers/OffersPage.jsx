import { Navbar, Footer } from '../components/components';
import { OffersComp } from './offers';

const OffersPage = (props) => {
    return(
        <div className='bg-black text-white'>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div>
                <div>
                    <h1 className="py-6 text-center text-3xl">
                        Offers           
                    </h1>
                </div>
                <div className='flex-initial min-h-screen'>
                    <OffersComp profile={false}/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default OffersPage;