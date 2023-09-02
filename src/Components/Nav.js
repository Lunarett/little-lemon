import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/NavStyle.css';

function Nav() {
    const location = useLocation();
    const navRef = useRef();
    const showBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className='nav-box'>
            <div className='nav-container'>
                <nav ref={navRef}>
                <ul>
                    <li><Link className={`nav-link ${location.pathname === '/' ? 'selected' : ''}`} to='/'>Home</Link></li>
                    <li><Link className={`nav-link ${location.pathname === '/About' ? 'selected' : ''}`} to='/About'>About</Link></li>
                    <li><Link className={`nav-link ${location.pathname === '/Reservations' ? 'selected' : ''}`} to='/Reservations'>Reservations</Link></li>
                    <li><Link className={`nav-link ${location.pathname === '/OrderOnline' ? 'selected' : ''}`} to='/OrderOnline'>Order Online</Link></li>
                    <li><Link className={`nav-link ${location.pathname === '/Login' ? 'selected' : ''}`} to='/Login'>Login</Link></li>
                </ul>
                <button className='nav-button nav-close button' onClick={showBar}>
                    <FaTimes />
                </button>
            </nav>
            </div>
            <button className='nav-button button' onClick={showBar}>
                <FaBars />
            </button>
        </div>

    );
}

export default Nav;