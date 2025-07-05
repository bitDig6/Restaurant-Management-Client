import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuthContext();
    const location = useLocation();

    if(loading){
        return (
            <>
                <div className='min-h-screen flex justify-center items-center'>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            </>
        );
    }

    if(user){
        return children;
    }

    return (
        <Navigate to='/login' state={ {from: location} } replace></Navigate>
    );
};

export default PrivateRoute;