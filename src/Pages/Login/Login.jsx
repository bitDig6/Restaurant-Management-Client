import React from 'react';
import loginImg from '../../assets/others/authentication1.png';

const Login = () => {
    return (
        <div className="p-10 lg:p-20 hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <figure className='w-1/3 mx-auto'>
                    <img className='w-full rounded-2xl' src={loginImg} alt="login-now" />
                </figure>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-base-200">
                    <div className="card-body">
                        <h1 className="text-center text-5xl font-bold mb-5">Login now!</h1>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;