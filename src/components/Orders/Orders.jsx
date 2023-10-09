import React, { useEffect, useState } from 'react';
import OrderCard from './OrderCard';

const Orders = () => {
    const [serviceOrdered, setServiceOrdered] = useState([])
    const [nodataFound, setNodataFound] = useState('')

    useEffect(() => {
        const services = JSON.parse(localStorage.getItem('service'))
        if (services) {
            setServiceOrdered(services)
        }
        else {
            setNodataFound('No Data Found')
        }
    }, [])
    return (
        <div className=' max-w-6xl mx-auto'>
            {
                nodataFound ? <p className=' text-center text-2xl my-10 h-[350px]'>{nodataFound}</p> :

                    <div className=' max-w-6xl mx-auto py-16 gap-10 grid lg:grid-cols-3'>
                        {
                            serviceOrdered.map(orderedItem => <OrderCard
                                key={orderedItem.id}
                                orderedItem={orderedItem}
                            ></OrderCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Orders;