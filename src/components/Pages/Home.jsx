import React from 'react';
import Bannar from './Bannar';
import Services from '../Services/Services';
import { useLoaderData } from 'react-router-dom';
import Works from '../Works/Works';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Bannar></Bannar>
            <Services services={services}></Services>
            <Works></Works>
        </div>
    );
};

export default Home;