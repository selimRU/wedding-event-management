import React from 'react';
import Bannar from './Bannar';
import Services from '../Services/Services';
import { useLoaderData } from 'react-router-dom';
import Works from '../Works/Works';
import Reviews from '../Reviews/Reviews';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    AOS.init({
        duration: 2000,
        offset: 200,
        easing: 'ease-in-out',
      });
    const services = useLoaderData()
    return (
        <div data-aos="fade-up">
            <Bannar></Bannar>
            <Services services={services}></Services>
            <Works></Works>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;