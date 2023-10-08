import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { googleLogin, login } = useContext(AuthContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorPassword, setErrorPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    // google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user
                console.log(user);
            })
    }

    // password login
    const handleLogIn = (e) => {
        e.preventDefault()
        // if ((password)) {
        //     setError("Password doesn't match")
        //     return
        // }

        login(email, password)
            .then(res => {
                const user = res.user
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                // Handle Firebase error
                const errorPassword = error.code;
                const errorEmail = error.message;

                if (errorPassword === 'auth/wrong-password') {
                    alert('Wrong password. Please try again.');
                } else if (errorEmail === 'auth/user-not-found') {
                    setErrorPassword("password doesn't match");
                    return
                } else {
                    setErrorEmail("email doesn't match"); // Handle other errors
                    return
                }
            })
        e.target.reset()
        toast.success("You have logged in successfully", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Log in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogIn} className="space-y-6" >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border py-1.5 pl-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border py-1.5 pl-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                        >
                            Log in
                        </button>
                    </div>
                    <p>{errorPassword}</p>
                    <p>{errorEmail}</p>
                </form>
                <ToastContainer />
            </div>
            <div className=' flex justify-center py-5'>
                <button onClick={handleGoogleLogin} className=' btn btn-outline text-center hover:bg-yellow-400'><span className=' text-xl text-blue-400'><AiOutlineGoogle /></span> Join With Google</button>
            </div>
            <p className=' text-center'>New here? please<Link to='/signin'><span className='text-blue-600 underline ml-3'>Register</span></Link></p>
        </div>
    );
};

export default Login;