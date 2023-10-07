import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams()
    console.log(id);
    const services = useLoaderData()
    console.log(services);
    const newService = services.find(service => service.id == id)
    console.log(newService);
    return (
        <div className=' max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 py-10'>
            <div className=' '>
                <div className='bg-yellow-100 p-5 rounded-md space-y-5'>
                    <div className=' relative'>
                        <img className=' rounded-full' src={newService.image} alt="" />
                        <div className=' bg-black h-full w-full opacity-70 absolute bottom-0 rounded-full'></div>
                    </div>
                    <div className=' flex justify-between text-base text-black font-semibold'>
                        <p className=' text-base text-black font-semibold'>Service name:</p>
                        <p>{newService.title}</p>
                    </div>
                    <div className=' flex justify-between text-base text-black font-semibold'>
                        <p className=' text-base text-black font-semibold'>Price:</p>
                        <p>${newService.price}</p>
                    </div>
                    <div className=' flex justify-between text-base text-black font-semibold'>
                        <p>Duration:</p>
                        <p>{newService?.duration}</p>
                    </div>
                </div>

            </div>
            <div className='lg:col-span-2'>
                {
                    <img className=' w-full rounded-md' src={newService.image} alt="" />

                }
                <div className="collapse collapse-plus bg-yellow-100 mt-4">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Features
                    </div>
                    <div className="collapse-content">
                        {newService?.features.map((feature, idx) => <ul className='' key={idx}>
                            <li>{feature}</li>
                        </ul>)}
                    </div>
                </div>
                <div className="collapse collapse-plus bg-yellow-100 mt-4">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Overview
                    </div>
                    <div className="collapse-content ">
                        <p>{newService.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;