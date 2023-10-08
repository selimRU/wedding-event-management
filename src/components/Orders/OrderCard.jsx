import React from 'react';

const OrderCard = ({ orderedItem }) => {
    const { title, description, image, price } = orderedItem;
    return (
        <div className=' space-y-4'>
            <img className='w-full rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105' src={image} alt="" />
            <p className='text-xl font-semibold text-black'>{title}</p>
            <p>Price: ${price}</p>
            <p>{description.length > 100 ? description.slice(0, 100) : description}</p>
        </div>
    );
};

export default OrderCard;