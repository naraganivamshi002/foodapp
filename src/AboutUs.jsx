// AboutUs Component
import React from 'react';
import './App.css';

const AboutUs = () => {
    return (
        <div className="aboutus">
            <h1>About Us</h1>
            <div className="card-container">
                <div className="card">
                    <img src="/images/about-us.jpg" alt="About Us" className="card-image" />
                    <div className="card-content">
                        <p>Learn more about our journey and mission to provide the best food experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;