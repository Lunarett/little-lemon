import React from 'react';

import {
    // Specials
    greekSalad,
    bruschetta,
    lemonDessert,

    // Testimonials
    pfp1,
    pfp2,
    pfp3,

    // About
    mna1,
    mna2,
} from '../Assets';

import { Hero, Specials, Testimonials, Story } from '../Components';

const Home = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <Story />
        </>
    );
}

export default Home;