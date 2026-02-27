// Updated Signup Component with Cards
import React from 'react';
import './App.css';

const Signup = () => {
    return (
        <div className="signup">
            <h1>Signup</h1>
            <p>Create an account to enjoy our services.</p>
            <div className="card-container">
                <div className="card">
                    <h2>Join Us</h2>
                    <p>Sign up to explore exclusive offers and updates.</p>
                </div>
            </div>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;