import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import useAuthContext from '../../Hooks/useAuthContext';
import Swal from 'sweetalert2';
import useAxiosOpen from '../../Hooks/useAxiosOpen';
import SocialLogin from '../../Components/SocialLogin';

const Register = () => {
    useDynamicTitle('Register');
    const axiosOpen = useAxiosOpen();
    const { createUser, updateUserProfile } = useAuthContext();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        //creating a new user entry in database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosOpen.post('/users', userInfo)
                            .then(res => {
                                if(res.data.insertedId){
                                    console.log('user added to db');
                                    reset();
                                    Swal.fire({
                                        title: "Registration Successful",
                                        icon: "success"
                                    });
                                    navigate('/');
                                }
                            }).catch( error => {
                                console.log(error);
                            })
                    }).catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset space-y-2">
                            <label className="label">Name</label>
                            <input type="text" className="input"
                                {...register("name", { required: true })}
                                name="name" placeholder="Name" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}

                            <label className="label">Photo URL</label>
                            <input type="url" className="input"
                                {...register("photo", { required: true })}
                                name="photo" placeholder="Photo URL" />
                            {errors.photo && <span className='text-red-600'>Photo URL is required</span>}

                            <label className="label">Email</label>
                            <input type="email" className="input" name="email"  {...register("email", { required: true })} autoComplete="off" placeholder="Email" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}

                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                                autoComplete='off' placeholder="Password" />
                            {errors.password?.type === "required" && (
                                <span className='text-red-600'>Password is required</span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className='text-red-600'>Password must be at least 6 characters</span>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <span className='text-red-600'>Password can be at most 20 characters</span>
                            )}
                            {errors.password?.type === "pattern" && (
                                <span className='text-red-600'>Password must contain at least one uppercase, one lowercase, one special character, one number</span>
                            )}


                            <input className='btn btn-neutral mt-4' type="submit" value="Sign Up" />
                        </form>
                        <div>
                            <p>Already Registered? <Link to='/login' className='text-blue-500 hover:underline'>Go to login</Link></p>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;