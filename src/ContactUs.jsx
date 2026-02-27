// ContactUs Component
import React from 'react';
import './App.css';

const ContactUs = () => {
    return (
        <div className="contactus">
            <h1>Contact Us</h1>
            <div className="card-container">
                <div className="card">
                    <img src="/images/contact-us.jpg" alt="Contact Us" className="card-image" />
                    <div className="card-content">
                        <p>We would love to hear from you! Reach out to us at:</p>
                        <p>Email: contact@foodapp.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;