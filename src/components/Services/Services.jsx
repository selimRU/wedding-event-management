import React, { useContext } from 'react';
import ServiceCard from './ServiceCard';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Services = ({ services }) => {
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user
            })
    }
    return (
        <div className='flex flex-col-reverse lg:flex-row max-w-6xl mx-auto py-16 gap-10'>
            <div className=''>
                <h2 className='text-2xl lg:ext-3xl text-center font-semibold text-black pb-5'>Our Popular Services</h2>
                <div className='w-full col-span-2 grid lg:grid-cols-2 justify-center gap-5 lg:gap-5'>
                    {
                        services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
            <div className=' w-full lg:w-[35%]'>
                <h3 className='text-2xl lg:text-3xl text-center lg:text-start text-black font-semibold'>Login With</h3>
                <div className=' flex justify-center lg:justify-start py-5'>
                    <button onClick={handleGoogleLogin} className=' btn btn-outline text-center hover:bg-yellow-400'><span className=' text-xl text-blue-400'><AiOutlineGoogle /></span>Join With Google</button>
                </div>
                <div>
                    <h3 className=' text-2xl lg:text-2xl text-center lg:text-start font-semibold py-5'>Our Social Contacts</h3>
                    <div className=' w-[50%] lg:w-full mx-auto text-center px-5 space-y-5'>
                        <div className=' flex justify-center lg:justify-start items-center w-[90%] md:w-[96%] gap-4'>
                            <span className=' text-2xl text-blue-500'><BiLogoFacebook /></span>
                            <a href="https://www.google.com/search?q=facebook&oq=face&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDwgCEEUYORiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDINCAYQABiDARixAxiABDIKCAcQABixAxiABDINCAgQABiDARixAxiABDIHCAkQABiPAtIBCTU2MTNqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"><h3 className='text-xl'>Faccbook</h3></a>
                        </div>
                        <div className=' flex justify-center lg:justify-start items-center w-[80%] md:w-[92%] gap-4'>
                            <span className=' text-2xl text-blue-500'><FaTwitter /></span>
                            <a href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyDMsS05XYDRgdGDwYi8pzywpSS0CAFnOB00&q=twitter&oq=twi&gs_lcrp=EgZjaHJvbWUqFggBEC4YgwEYxwEYsQMYyQMY0QMYgAQyBggAEEUYOTIWCAEQLhiDARjHARixAxjJAxjRAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDIGCAUQRRg8MgYIBhBFGDwyBAgHEAXSAQgyNzIzajBqOagCALACAA&sourceid=chrome&ie=UTF-8"><h3 className='text-xl'>Twitter</h3></a>
                        </div>
                        <div className=' flex justify-center lg:justify-start md items-center gap-4'>
                            <span className=' text-2xl text-red-400'><FaInstagramSquare /></span>
                            <a href="https://www.google.com/search?q=instagram&oq=insta&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxiKBTIGCAAQRRg5MgkIARAjGCcYigUyDQgCEAAYgwEYsQMYgAQyDQgDEAAYgwEYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBAgHEAXSAQgzNTM3ajBqOagCALACAA&sourceid=chrome&ie=UTF-8"><h3 className='text-xl'>Instagram</h3></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;