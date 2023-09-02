import React from 'react';
import { mna1, mna2 } from '../Assets';
import { WhoWeAre, Chef } from '../Components';

const About = () => {
    return (
        <div style={{ height: "100vh" }}>
            <WhoWeAre />
            <Chef />
        </div>
    );
}

export default About;