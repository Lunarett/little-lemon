import React from 'react';
import '../../Styles/ContactStyle.css';

const Contact = () => {
    return (
        <section className='contact-section'>
            <div className='contact-text-box'>
                <h1>Contact Us for Assistance</h1>
                <p>If you encounter any difficulties while booking a table or have had an experience that did not meet your expectations, we're here to help. Our team is committed to ensuring that your dining experience is nothing short of excellent.</p>
                <div className="contact-info">
                    <h3>Email:</h3>
                    <p>contact@little-lemon.com</p>
                    <h3>Phone:</h3>
                    <p>(312) 555-1234</p>
                    <h3>Address:</h3>
                    <p>123 Lemon St, Chicago, IL 60601</p>
                </div>
            </div>
            <div className='contact-img' />
        </section>
    );
}

export default Contact;