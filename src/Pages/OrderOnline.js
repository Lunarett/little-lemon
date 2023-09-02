import React from 'react';
import { menu } from '../Constants';
import '../Styles/MenuStyle.css';

const DishCard = ({ dish }) => {
    return (
        <div className="dish-card">
            <img className='dish-img' src={dish.image} alt={dish.name} />

            <div className='dish-text'>
                <h3>{dish.name}</h3>
                <p className='dish-price'>{dish.price}</p>
                <p>{dish.desc}</p>
            </div>
            <button className='dish-card-button button'>Order for Delivery</button>
        </div>
    );
}

const DishCategory = ({ category }) => {
    return (
        <div className='cat'>
            <h1 className='cat-heading'>{category.category}</h1>
            <div className="dish-container">
                {category.items.map((dish, index) => (
                    <DishCard key={index} dish={dish} />
                ))}
            </div>
        </div>
    );
}

const OrderOnline = () => {
    return (
        <section className='menu-section'>
            <div className='menu-hero-bg'>
                <div className='menu-hero'>
                    <h1 className='menu-hero-heading'>Order Your Food Online!</h1>
                    <h2 className='menu-hero-subheading'>Get your favorite dishes delivered straight to your doorstep!</h2>
                </div>
            </div>

            <div className='menu'>
                <h1>Our Menu</h1>
                {menu.map((categoryObj, index) => (
                    <DishCategory key={index} category={categoryObj} />
                ))}
            </div>
        </section>
    );
}

export default OrderOnline;