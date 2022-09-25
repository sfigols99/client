import { Navigate, Outlet } from 'react-router-dom';
import { verify_user } from './pages/utils/Auth';
import { useState, useEffect } from 'react';

const PrivateRoutes = () => {           
    
    return (
        true ?
            <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;