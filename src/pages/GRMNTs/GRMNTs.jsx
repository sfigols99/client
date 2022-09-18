import { Navbar, Footer } from '../components/components';
import { Rents } from "../GRMNTs/grmnts";

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