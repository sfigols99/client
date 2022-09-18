import { Navbar, Footer } from '../components/components';

const MyOffers = () => {
    return(
        <div>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div>
                <h1>Main</h1>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default MyOffers;