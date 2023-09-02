import React from 'react';
import { Link } from 'react-router-dom';
import { restFood1 } from '../Assets';
import '../Styles/FooterStyle.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Column 2: Doormat Navigation */}
                    <div className="footer-column">
                        <h2>Navigation</h2>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Reservations'>Reservations</Link></li>
                            <li><Link to='/OrderOnline'>Order Online</Link></li>
                            <li><Link to='/Login'>Login</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Information */}
                    <div className="footer-column">
                        <h2>Contact</h2>
                        <ul>
                            <li>Email: contact@little-lemon.com</li>
                            <li>Phone: (312) 555-1234</li>
                            <li>Address: 123 Lemon St, Chicago, IL 60601</li>
                        </ul>
                    </div>

                    {/* Column 4: Social Media */}
                    <div className="footer-column">
                        <h2>Social Media</h2>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;