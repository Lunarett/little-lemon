import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../Components';
import logo from '../Assets/Logo.svg';
import '../Styles/HeaderStyle.css';

const Header = () => {
    return (
        <header className='top-header'>
            <Link to="/"><img src={logo} alt="Logo" style={{ paddingRight: '20px' }} /></Link>
            <Nav />
        </header>
    );
}

export default Header;