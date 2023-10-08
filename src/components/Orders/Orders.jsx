import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';

const Orders = () => {
    const [serviceOrdered, setServiceOrdered] = useState([])
    console.log(serviceOrdered);

    useEffect(() => {
        const services = JSON.parse(localStorage.getItem('service'))
        setServiceOrdered(services)
    }, [])
    return (
        <div className=' max-w-6xl mx-auto py-16 gap-10 grid lg:grid-cols-3'>
            {
                serviceOrdered.map(orderedItem => <OrderCard
                    key={orderedItem.id}
                    orderedItem={orderedItem}
                ></OrderCard>)
            }
        </div>
    );
};

export default Orders;