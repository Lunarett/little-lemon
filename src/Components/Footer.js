import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../Assets/restauranfood.jpg';
import '../Styles/FooterStyle.css';

function Footer() {
    return (
        <footer className='footerBox'>
            {/* Column 0: Image */}
            <span className='imgContainer'>
                <img className='footerImg' src={footerImg} />
            </span>

            {/* Column 1: Doormat Navigation */}
            <span className='footerContainer'>
                <h4>Doormat Navigation</h4>
                <Link to='/' className='footerNavLink'>Home</Link>
                <Link to='/About' className='footerNavLink'>About</Link>
                <Link to='/Reservations' className='footerNavLink'>Reservations</Link>
                <Link to='/OrderOnline' className='footerNavLink'>Order Online</Link>
                <Link to='/Login' className='footerNavLink'>Login</Link>
            </span>

            {/* Column 2: Contact */}
            <span className='footerContainer'>
                <h4>Contact</h4>
                <p>Address: City, Street, Building No.</p>
                <p>Phone: +00 123 4567</p>
                <p>Email: example@exmp.com</p>
            </span>

            {/* Column 3: Social Media Links */}
            <span className='footerContainer'>
                <h4>Social Media Links</h4>
                <p>Facebook.</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </span>
        </footer>
    );
}

export default Footer;