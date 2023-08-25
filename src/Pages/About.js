import React from 'react';
import aboutImg from '../Assets/Mario and Adrian A.jpg';
import chefImg from '../Assets/restaurant chef B.jpg';
import '../Styles/AboutStyle.css';
import '../Styles/AboutChefStyle.css';

function AboutChefBlock() {
    return (
        <div>
            <div className='chefBox'>
                <img className='chefImg' src={chefImg} />
                <div className='chefTextContainer'>
                    <h1 className='chefHeading'>Chef Brown</h1>
                    <p className='chefDesc'>
                        Terry Brown is not your ordinary chef. He is the mastermind behind the Little Lemon Restaurant, a cozy place that serves delicious dishes with a twist. Terry loves to experiment with different flavors and ingredients, creating unique combinations that surprise and delight his customers. Whether it's a lemon chicken with honey and rosemary, or a lemon cheesecake with blueberry sauce, Terry knows how to make every meal a memorable experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

function AboutBlock() {
    return (
        <div className='aboutBox'>
            <div className='aboutContainer'>
                <div className='aboutTextContainer'>
                    <h1>Who Are We?</h1>
                    <p>
                        Welcome to our cozy and delicious restaurant in the heart of Chicago! We opened our doors in 2010 and since then we have been serving our loyal customers with mouth-watering dishes and friendly service. We are passionate about food and we want to share our love with you. Come and join us for a memorable dining experience!
                    </p>
                </div>
                <img className='aboutImg' src={aboutImg} />
            </div>
        </div>
    );
}

function About() {
    return (
        <>
            <AboutBlock />
            <AboutChefBlock />
        </>
    );
}

export default About;