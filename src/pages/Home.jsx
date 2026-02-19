import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Campus from '../components/Campus';
import FutureVision from '../components/FutureVision';
import Commitment from '../components/Commitment';

const Home = () => {
    return (
        <div>
            <Hero />
            <section id="about"><About /></section>
            <section id="programs"><Programs /></section>
            <section id="campus"><Campus /></section>
            <section id="vision"><FutureVision /></section>
            <Commitment />
        </div>
    );
};

export default Home;
