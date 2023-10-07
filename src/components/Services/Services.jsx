import React from 'react';
import ServiceCard from './ServiceCard';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa';
const Services = ({ services }) => {

    return (
        <div className=' grid lg:grid-cols-3 max-w-6xl mx-auto py-16'>
            <div className=' col-span-2 grid lg:grid-cols-2 gap-5'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <div>
                <h3 className=' text-2xl text-center font-semibold'>Login With</h3>
                <div className=' flex justify-center py-5'>
                    <button className=' btn btn-outline text-center hover:bg-yellow-400'><span className=' text-xl text-blue-400'><AiOutlineGoogle /></span> Join With Google</button>
                </div>
                <div>
                    <h3 className='text-2xl text-center font-semibold py-5'>Our Social Contacts</h3>
                    <div className=' w-[50%] mx-auto text-center px-5 space-y-5'>
                        <div className=' flex items-center gap-4'>
                            <span className=' text-2xl text-blue-500'><BiLogoFacebook /></span>
                            <a href="https://www.google.com/search?q=facebook&oq=face&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyEwgBEC4YgwEYxwEYsQMY0QMYgAQyDwgCEEUYORiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDINCAYQABiDARixAxiABDIKCAcQABixAxiABDINCAgQABiDARixAxiABDIHCAkQABiPAtIBCTU2MTNqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"><h3 className='text-xl'>Faccbook</h3></a>
                        </div>
                        <div className=' flex items-center gap-4'>
                            <span className=' text-2xl text-blue-500'><FaTwitter /></span>
                            <a href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyDMsS05XYDRgdGDwYi8pzywpSS0CAFnOB00&q=twitter&oq=twi&gs_lcrp=EgZjaHJvbWUqFggBEC4YgwEYxwEYsQMYyQMY0QMYgAQyBggAEEUYOTIWCAEQLhiDARjHARixAxjJAxjRAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDIGCAUQRRg8MgYIBhBFGDwyBAgHEAXSAQgyNzIzajBqOagCALACAA&sourceid=chrome&ie=UTF-8"><h3 className='text-xl'>Twitter</h3></a>
                        </div>
                        <div className=' flex items-center gap-4'>
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