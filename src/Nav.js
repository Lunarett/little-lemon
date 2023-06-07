import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/Logo.svg';
import { useLocation } from 'react-router-dom';

import './Styles/NavStyle.css';

function Nav() {
    const location = useLocation();

    return (
        <nav className='navBar'>
            <Link to="/"><img className='navImg' src={logo} alt="Logo" /></Link>

            <ul className='navArea'>
                <li><Link className={`navLink ${location.pathname === '/' ? 'selected' : ''}`} to='/'>Home</Link></li>
                <li><Link className={`navLink ${location.pathname === '/About' ? 'selected' : ''}`} to='/About'>About</Link></li>
                <li><Link className={`navLink ${location.pathname === '/Reservations' ? 'selected' : ''}`} to='/Reservations'>Reservations</Link></li>
                <li><Link className={`navLink ${location.pathname === '/OrderOnline' ? 'selected' : ''}`} to='/OrderOnline'>Order Online</Link></li>
                <li><Link className={`navLink ${location.pathname === '/Login' ? 'selected' : ''}`} to='/Login'>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;