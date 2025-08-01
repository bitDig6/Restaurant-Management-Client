import React from 'react';
import { FaGoogle } from "react-icons/fa";
import useAuthContext from '../Hooks/useAuthContext';

const SocialLogin = () => {
    const { loginWithGoogle } = useAuthContext();

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then( res => {
                console.log(res.user);
            }).catch( error => {
                console.log(error.message);
            })
    }

    return (
        <div className='px-8'>
            <div className="divider">OR</div>
            <div className='btn' onClick={handleGoogleSignIn}>
                <FaGoogle className='mr-2'></FaGoogle>
                Sign In with Google
            </div>
        </div>
    );
};

export default SocialLogin;