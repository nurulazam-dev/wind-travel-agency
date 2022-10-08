import React from 'react';
import DetailsFooter from '../Shared/DetailsFooter';
import Footer from '../Shared/Footer';
import BookSteps from './BookSteps';
import Category from './Category';
import Destinations from './Destinations';
import Hero from './Hero';
import Subscribe from './Subscribe';
import TrustedCo from './TrustedCo';

const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Destinations />
            <BookSteps />
            <TrustedCo />
            <Subscribe />
            <DetailsFooter />
            <Footer />
        </div>
    );
};

export default Home;