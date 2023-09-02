import React from 'react';
import '../../Styles/ChefStyle.css';

const Chef = () => {
    return (
        <section className='chef-section'>
            <div className='chef-text-box'>
                <h1 className='chef-heading'>Chef Brown</h1>
                <p className='chef-p'>
                    Terry Brown is not your ordinary chef. He is the mastermind behind the Little Lemon Restaurant, a cozy place that serves delicious dishes with a twist. Terry loves to experiment with different flavors and ingredients, creating unique combinations that surprise and delight his customers. Whether it's a lemon chicken with honey and rosemary, or a lemon cheesecake with blueberry sauce, Terry knows how to make every meal a memorable experience.
                </p>
            </div>
            <div className='chef-img' />
        </section>
    );
}

export default Chef;