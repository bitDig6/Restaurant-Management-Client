import React from 'react';
import { FaGoogle } from "react-icons/fa";
import useAuthContext from '../Hooks/useAuthContext';
import useAxiosOpen from '../Hooks/useAxiosOpen';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const { loginWithGoogle } = useAuthContext();
    const axiosOpen = useAxiosOpen();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then( res => {
                console.log(res.user);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                };
                axiosOpen.post('/users', userInfo)
                    .then( res => {
                        console.log(res.data);
                        navigate('/');
                    }).catch( error => {
                        console.log(error);
                    })
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