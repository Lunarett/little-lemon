import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsDown } from 'react-icons/fi';
import '../../Styles/HeroStyle.css';

const Hero = () => {
    const scrollDown = () => {
        const section = document.querySelector(".section-hero");
        const nav = document.querySelector(".top-header");

        if (section && nav) {
            const newScrollLocation = section.offsetHeight + nav.offsetHeight;
            window.scrollTo({ top: newScrollLocation, behavior: "smooth" });
        }
    }

    return (
        <section className='section-hero'>
            <div className='div-hero'>
                <div className='div-heading'>
                    <h1 className='heading-hero'>Little Lemon</h1>
                    <h2 className='subHeading-hero'>Chicago</h2>
                </div>
                <div className='line-hero' />
                <p className='p-hero'>
                    Welcome to Little Lemon, the most refreshing and delicious restaurant in town!
                    We serve fresh and healthy dishes with a touch of citrus that will make your
                    mouth water. Whether you're looking for a hearty breakfast, a light lunch,
                    or a satisfying dinner, we have something for everyone. Come and enjoy our cozy
                    atmosphere, friendly service, and amazing food. You'll love Little Lemon!
                </p>

                <Link to='/Reservations' className='button-hero button'>Book A Table Now!</Link>
            </div>

            <div className='scroll-arrow' onClick={scrollDown}>
                <FiChevronsDown />
            </div>
        </section>
    );
}

export default Hero;