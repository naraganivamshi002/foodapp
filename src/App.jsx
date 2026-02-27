import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";   // ✅ ADD THIS

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Deserts from "./Deserts";
import Milk from "./Milk";
import Chocolates from "./Chocolates";
import Signup from "./Signup";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App() {

  // ✅ GET CART DATA FROM REDUX
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ CALCULATE TOTAL QUANTITY
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      {/* ===== HEADER ===== */}
      <header className="main-header">
        <div className="title-box">
          <h1 className="logo">Happy Eating</h1>
          <p className="slogan">Love Eating</p>
        </div>

        <nav className="navbar">
          <Link to="/"> 🏠Home</Link>
          <Link to="/Veg"> 🥦Veg</Link>
          <Link to="/NonVeg">🍗Non Veg</Link>
          <Link to="/Deserts"> 🍰Deserts</Link>
          <Link to="/Milk">🍨Milk</Link>
          <Link to="/Chocolates">🍫Chocolates</Link>

          {/* ✅ CART WITH COUNT */}
          <Link to="/Cart" style={{ position: "relative" }}>
            🛒Cart
            {totalItems > 0 && (
              <span
                style={{
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "4px 8px",
                  fontSize: "12px",
                  marginLeft: "6px",
                }}
              >
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/Orders">📋Orders</Link>
        </nav>
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-container">
                <h2 className="home-title">Welcome to Happy Eating 🍽️</h2>
                <p className="home-sub">
                  Delicious food delivered with love!
                </p>
              </div>
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/NonVeg" element={<NonVeg />} />
          <Route path="/Deserts" element={<Deserts />} />
          <Route path="/Milk" element={<Milk />} />
          <Route path="/Chocolates" element={<Chocolates />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;