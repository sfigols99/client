import { Outlet, useNavigate } from 'react-router-dom';
import { load, verify_user } from './pages/utils/Auth';
import { useEffect, useState } from 'react';
import { NoMetamask } from './pages/components/components';

const PrivateRoutes = () => {           
    
    const nav = useNavigate();

    const [metamaskExists, setMetamaskExists] = useState(true);

    const handle_login = async() => {
        const verify = await verify_user();
        
        if(verify === false) {
            setMetamaskExists(true);

            const address = await load();

            nav("/login/"+address);
        }
        else if (verify === "No_Metamask") {  
            setMetamaskExists(false);
        }
    }

    useEffect(() => {
        handle_login();
    }, []);

    return (
        metamaskExists ?
        <Outlet/> : <NoMetamask/>
    )
}

export default PrivateRoutes;