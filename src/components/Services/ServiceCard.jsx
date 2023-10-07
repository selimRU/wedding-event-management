import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, title, description, image, price } = service;
    const navigate = useNavigate()
    const handleDetails = () => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='shadow-md p-5 space-y-3'>
            <img className='w-full rounded-md' src={image} alt="" />
            <p className=' text-xl font-semibold text-black'>{title}</p>
            <p>Price:$ {price}</p>
            <p>{description.length > 100 ? description.slice(0, 100) : description}</p>
            <div onClick={ handleDetails} className=' flex justify-center'>
                <button className=' text-base bg-yellow-200 hover:bg-yellow-300 px-5 py-2 rounded-md'>Details</button>
            </div>
        </div>
    );
};

export default ServiceCard;