import React from 'react';
import aboutImage from '../images/aboutImage.png';
import CommonPage from './CommonPage';
function About() {
    return (
        <CommonPage heading="Welcome to about us page" imgSrc={aboutImage} openUrl="/contact" btnText="Contact Now"/>
    )
}

export default About;