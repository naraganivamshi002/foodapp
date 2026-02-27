import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'veg', title: 'Veg Items', desc: 'Fresh vegetarian dishes', to: '/Veg' },
  { id: 'nonveg', title: 'Non Veg Items', desc: 'Tasty non-veg specials', to: '/NonVeg' },
  { id: 'dessert', title: 'Desserts', desc: 'Sweet treats', to: '/Deserts' },
  { id: 'milk', title: 'Milk Products', desc: 'Delicious dairy products like cheese, butter, and yogurt', to: '/Milk' },
  { id: 'chocolates', title: 'Chocolates', desc: 'Delicious chocolates', to: '/Chocolates' },
  { id: 'signup', title: 'Signup', desc: 'Join us for exclusive offers', to: '/Signup' },
  { id: 'cart', title: 'Cart', desc: 'View your selected items', to: '/Cart' },
  { id: 'orders', title: 'Orders', desc: 'Track your orders', to: '/Orders' },
  { id: 'aboutus', title: 'About Us', desc: 'Learn more about us', to: '/AboutUs' },
  { id: 'contactus', title: 'Contact Us', desc: 'Get in touch with us', to: '/ContactUs' },
];

function Home() {
  return (
    <div className="home-container">
      <h1 style={{ marginBottom: 18 }}>Explore</h1>

      <div className="card-container">
        {sections.map((s) => (
          <div key={s.id} className="food-card home-card">
            <div className="home-card-header">
              <div className="home-card-title">{s.title}</div>
            </div>

            <p className="home-card-desc">{s.desc}</p>

            <div style={{ textAlign: 'right' }}>
              <Link to={s.to} style={{ textDecoration: 'none' }}>
                <button className="open-btn">Open</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;