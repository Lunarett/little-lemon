import React from 'react';
import { testimonials } from '../../Constants';
import '../../Styles/TestimonialsStyle.css';

const TestimonialCard = ({ image, name, username, msg }) => {
    return (
        <div className="testimonial-card">
            <div className='testimonial-img-bg'>
                <img src={image} alt={name} className="testimonial-image" />
            </div>
            <div className='testimonial-bottom'>
                <h3 className="testimonial-username">@{username}</h3>
                <p className="testimonial-msg">"{msg}"</p>
            </div>

        </div>
    );
}

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h1>Testimonials</h1>
            <div className="testimonial-container">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        image={testimonial.image}
                        name={testimonial.name}
                        username={testimonial.username}
                        msg={testimonial.msg}
                    />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;