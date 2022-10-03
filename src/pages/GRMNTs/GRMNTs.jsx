import { Navbar, Footer } from '../components/components';
import { Rents } from "../GRMNTs/grmnts";

const GRMNTs = () => {
    return(
        <div className='bg-black text-white'>
            <div className='flex-initial justify-center items-center '>
                <Navbar />
            </div>
            <div>
                <div>
                    <h1 className="py-6 text-center text-3xl" >GRMNT's</h1>
                </div>
                <div className='flex-initial min-h-screen'>
                    <Rents account={false}/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default GRMNTs;