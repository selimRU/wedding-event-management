import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [error, setError] = useState('')
    const { createUser, profileUpdate } = useContext(AuthContext)


    const handleCreateUser = (e) => {
        e.preventDefault()
        setError('')
        // password validation
        if (password.length > 6) {
            setError('The password is less than 6 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError("The password don't have a capital letter")
            return
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError("The password don't have a special character")
            return
        }
        toast.success("You have created user successfully", {
            position: toast.POSITION.TOP_CENTER
        });
        createUser(email, password)
            .then(res => {
                (res.user);
                profileUpdate(name, photo)
                    .then(() => {

                    })

            })
            .catch(error => console.log(error.message))
        e.target.reset()
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleCreateUser} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                className="block w-full rounded-md py-1.5 pl-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6 border"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Image Link
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPhoto(e.target.value)}
                                id="image"
                                name="image"
                                type="text"
                                placeholder="Your Image Link"
                                required
                                className="block w-full rounded-md py-1.5 pl-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6 border"
                            />
                        </div>
                        <p className=' text-sm text-red-600 mt-4'>{error}</p>
                    </div>
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
                                placeholder="Your Email"
                                required
                                className="block w-full rounded-md py-1.5 pl-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6 border"
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
                                placeholder="Your Password"
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
                            Sign in
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
            <p className=' text-center  pt-5'>Already have an account? please<Link to='/login'><span className='text-blue-600 underline ml-3'>LogIn</span></Link></p>
        </div>
    );
};

export default Signin;