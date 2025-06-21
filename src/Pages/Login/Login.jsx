import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

const Login = () => {
    useDynamicTitle('Login');
    const { user } = useContext(AuthContext);


    const captchaRef = useRef(null);
    const [ disabled, setDisabled] = useState(true);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    useEffect( () => {
         loadCaptchaEnginge(6); 
    }, []);

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

    return (
        <div className="p-10 lg:p-20 hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <figure className='w-1/3 mx-auto'>
                    <img className='w-full rounded-2xl' src={loginImg} alt="login-now" />
                </figure>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-base-200">
                    <div className="card-body">
                        <h1 className="text-center text-5xl font-bold mb-5">Login now!</h1>
                        <form onSubmit={handleLogin} className="fieldset space-y-2">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" autoComplete='off' placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <LoadCanvasTemplate></LoadCanvasTemplate>
                            <input type="text" className='input' ref={captchaRef} name="captcha" autoCapitalize='off' placeholder='type the text above'/>
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
                            <input type='submit' disabled={disabled} className="btn btn-neutral mt-4" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;