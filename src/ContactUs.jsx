import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Contact Us 📞</h1>

      <p className="contact-text">
        We would love to hear from you!
      </p>

      <div className="contact-details">
        <p>📍 Address: Hyderabad, India</p>
        <p>📞 Phone: +91 7993946652</p>
        <p>📧 Email: happyeating@gmail.com</p>
      </div>

      <p className="thanks">
        Thank you for visiting <b>Happy Eating 🍽️</b>
      </p>
    </div>
  );
}

export default ContactUs;