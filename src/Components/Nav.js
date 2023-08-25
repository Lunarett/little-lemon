import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/Logo.svg';
import '../Styles/NavStyle.css';

function Nav() {
    const location = useLocation();
    const navRef = useRef();
    const showBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className='navBox'>
            <div className='navContainer'>
                <Link to="/"><img className='navImg' src={logo} alt="Logo" /></Link>
                <nav ref={navRef}>
                <ul>
                    <li><Link className={`navLink ${location.pathname === '/' ? 'selected' : ''}`} to='/'>Home</Link></li>
                    <li><Link className={`navLink ${location.pathname === '/About' ? 'selected' : ''}`} to='/About'>About</Link></li>
                    <li><Link className={`navLink ${location.pathname === '/Reservations' ? 'selected' : ''}`} to='/Reservations'>Reservations</Link></li>
                    <li><Link className={`navLink ${location.pathname === '/OrderOnline' ? 'selected' : ''}`} to='/OrderOnline'>Order Online</Link></li>
                    <li><Link className={`navLink ${location.pathname === '/Login' ? 'selected' : ''}`} to='/Login'>Login</Link></li>
                </ul>
                <button className='navBtn navClose' onClick={showBar}>
                    <FaTimes />
                </button>
            </nav>
            </div>
            <button className='navBtn' onClick={showBar}>
                <FaBars />
            </button>
        </div>

    );
}

export default Nav;