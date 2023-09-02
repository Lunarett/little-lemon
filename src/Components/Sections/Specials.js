import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import '../../Styles/SpecialsStyle.css';
import { menu } from '../../Constants';
import { Link } from 'react-router-dom';

const SpecialsCard = ({ special }) => {
    return (
        <div className="specials-card">
            <img className='specials-image' src={special.image} alt={special.name} />

            <div className='specials-text'>
                <h3>{special.name}</h3>
                <p className='specials-price'>{special.price}</p>
                <p>{special.desc}</p>
            </div>
            <button className='specials-card-button button'>Order for Delivery</button>
        </div>
    );
}

const Specials = () => {
    const specialsCategory = menu.find(category => category.category === "Specials");
    const specials = specialsCategory ? specialsCategory.items : [];

    return (
        <section className="special-section">
            <h1>Specials</h1>
            <div className="specials-container">
                {specials.map((special, index) => (
                    <SpecialsCard key={index} special={special} />
                ))}
            </div>

            <Link to='/OrderOnline' className='specials-browse-button button'>Browse Our Menu! <FiChevronRight size={20} /></Link>
        </section>
    );
}

export default Specials;