import React from 'react';

import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import heroImg from './Assets/greek salad.jpg';
import specialImg1 from './Assets/greek salad.jpg';
import specialImg2 from './Assets/bruchetta.svg';
import specialImg3 from './Assets/lemon dessert.jpg';
import pfp1 from './Assets/pfp1.jpg';
import pfp2 from './Assets/pfp2.jpeg';
import pfp3 from './Assets/pfp3.jpg';
import aboutImg1 from './Assets/restaurant chef B.jpg';
import aboutImg2 from './Assets/Mario and Adrian A.jpg';
import bgImg from './Styles/StyleAssets/BG_Lemon_Transparent.png'

import './Styles/HeroBlockStyle.css';
import './Styles/SpecialsStyle.css';
import './Styles/SpecialsCardStyle.css';
import './Styles/TestimonialCardStyle.css';
import './Styles/TestimonialStyle.css';
import './Styles/HomeAboutStyle.css';

function HeroBlock() {
    return (
        <div className='heroBox'>
            <div className='heroContainer'>
                <div className='heroTextContainer'>
                    <div className='heroTitleContainer'>
                        <h1>Little Lemon</h1>
                        <h4>Chicago</h4>
                    </div>
                    <p>
                        Welcome to Little Lemon, the most refreshing and delicious restaurant in town! We serve fresh and healthy dishes with a touch of citrus that will make your mouth water. Whether you're looking for a hearty breakfast, a light lunch, or a satisfying dinner, we have something for everyone. Come and enjoy our cozy atmosphere, friendly service, and amazing food. You'll love Little Lemon!
                    </p>
                    <Link to='/Reservations' className='reserveBtn'>Reserve a Table</Link>
                </div>
                <img className='heroImg' src={heroImg} />
            </div>
        </div>
    );
}

function SpecialsCard(props) {
    const { image, title, price, desc } = props;

    return (
        <div className='cardBox'>
            <img className='cardImg' src={image} />
            <span className='titleContainer'>
                <h1 className='cardTitle'>{title}</h1>
                <h2 className='cardPrice'>{price}</h2>
            </span>
            <p className='cardDesc'>{desc}</p>
            <div className='cardButtonContainer'>
                <button className='cardButton'>Order a Delivery</button>
            </div>
        </div>
    );
}

function Specials() {
    return (
        <Parallax strength={500} bgImage={bgImg} className='specialsBox'>
            <div className='specialsContainer'>
                <div className='specialtsTitleContainer'>
                    <h2>Specials</h2>
                    <Link to='/OrderOnline' className='specialsMenuButton'>Online Menu</Link>
                </div>
                <div className='specialsCardContainer'>
                    <SpecialsCard
                        image={specialImg1}
                        title="Greek Salad"
                        price="$12.99"
                        desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <SpecialsCard
                        image={specialImg2}
                        title="Bruchetta"
                        price="$5.99"
                        desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <SpecialsCard
                        image={specialImg3}
                        title="Lemon Dessert"
                        price="$5.00"
                        desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </div>
            </div>
        </Parallax>
    );
}

function TestimonialCard(props) {
    const { image, name, userName, comment } = props;

    return (
        <div className='testimonialCardBox'>
            <div className='testimoniaUserContainer'>
                <img className='testimonialImg' src={image} />
                <div className='testimonialNameContainer'>
                    <h1 className='testimonialName'>{name}</h1>
                    <h2 className='testimonialUserName'>{userName}</h2>
                </div>
            </div>
            <p className='testimonialComment'>"{comment}"</p>
        </div>
    );
}

function Testimonials() {
    return (
        <div className='testimonialBox'>
            <h1>Testimonials</h1>
            <div className='testimonialsArea'>
                <TestimonialCard
                    image={pfp1}
                    name="Sara Lopez"
                    userName="Sara72"
                    comment="Best Feta Salad in town. Flawless everytime!"
                />
                <TestimonialCard
                    image={pfp2}
                    name="Noah Turner"
                    userName="ahnoT56"
                    comment="Service was outstanding!"
                />
                <TestimonialCard
                    image={pfp3}
                    name="Sandra Murphy"
                    userName="smurf95"
                    comment="food tasted great and prepared quickly!"
                />
            </div>
        </div>
    );
}

function AboutDesc() {
    return (
        <div className='aboutBox'>
            <div className='aboutImgContainer'>
                <img className='aboutImg1' src={aboutImg1} />
                <img className='aboutImg2' src={aboutImg2} />
            </div>
            <div className='aboutContainer'>
                <div className='aboutTitleContainer'>
                    <h1 className='aboutTitle'>Little Lemon</h1>
                    <h4 className='aboutTitle2'>Chicago</h4>
                </div>
                <p className='aboutDesc'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
        </div>
    );
}

function Home() {
    return (
        <>
            <HeroBlock />
            <Specials />
            <Testimonials />
            <AboutDesc />
        </>
    );
}

export default Home;