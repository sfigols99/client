import { Outlet, useNavigate } from 'react-router-dom';
import { load, verify_user } from './pages/utils/Auth';
import { useEffect } from 'react';

const PrivateRoutes = () => {           
    
    const nav = useNavigate();

    const handle_login = async() => {
        const verify = await verify_user();
        
        if(verify === false) {
            const address = await load();

            nav("/login/"+address);
        }
    }

    useEffect(() => {
        handle_login();
    }, []);

    return (
        <Outlet/>
    )
}

export default PrivateRoutes;