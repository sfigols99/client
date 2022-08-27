import { Navbar, Footer, Rents } from './components';

const GRMNTs = () => {
    return(
        <div className='bg-black text-white'>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div>
                <Rents/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default GRMNTs;