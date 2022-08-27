import { Navbar, TenantOffers, Footer } from './components';

const Tenants = () => {
    return(
        <div className='bg-black text-white'>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div>
                <TenantOffers/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Tenants;