import React from 'react';
import Bannar from './Bannar';

const Contact = () => {
    return (
        <div >
            <Bannar></Bannar>
            <div className=' space-y-28 my-10 max-w-6xl mx-auto px-5'>
                <h1 className=' text-5xl text-center font-bold border-b-yellow-200 border-b-2 py-5'>Contact Us</h1>
                <h3 className=' text-xl font-semibold text-center italic'>Mobile : 01700000000,01711111111</h3>
                <h3 className=' text-xl font-semibold text-center italic'>Mail : selim.ru.11.92@gmail.com</h3>
                <h4 className=' text-xl text-center font-semibold italic'>
                    Our Office : Banani, Dhaka, Shop No 10, Banani, dhaka-700 123
                </h4>
            </div>
        </div>
    );
};

export default Contact;