import React from 'react';
import { Link } from 'react-router-dom';
import { mna2 } from '../../Assets';
import '../../Styles/StoryStyle.css';

const Story = () => {
    return (
        <section className='story-section'>
            <div className='story-img' />
            <div className='story-text-container'>
                <div className='story-heading-container'>
                    <h1 className='story-heading'>Little Lemon</h1>
                    <h2 className='story-subHeading'>Chicago</h2>
                </div>
                <p className='story-p'>
                    Welcome to Little Lemon, the most refreshing and delicious restaurant in town! We serve fresh and healthy dishes with a touch of citrus that will make your mouth water. Whether you're looking for a hearty breakfast, a light lunch, or a satisfying dinner, we have something for everyone. Come and enjoy our cozy atmosphere, friendly service, and amazing food. You'll love Little Lemon!
                </p>
                <Link to='/About' className='story-button button'>Read More...</Link>
            </div>
        </section>
    );
}

export default Story;