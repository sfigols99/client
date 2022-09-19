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
                        {
                            (props.is_tenant) ?
                                <span>Tenant Offers</span>
                            :
                                <span>Landlord Offers</span>
                        }             
                    </h1>
                </div>
                <OffersComp is_tenant={props.is_tenant}/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default OffersPage;