import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Chocolates from "./Chocolates";
import Deserts from "./Deserts";
import Milk from "./Milk";
import Signup from "./Signup";
import Login from "./Login";
import Orders from "./Orders";
import Cart from "./Cart";

function App() {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <BrowserRouter>

      {/* ===== HEADER ===== */}
      <header className="main-header">

        <div className="title-box">
          <h1 className="logo">
            Madhuram Restaurant <sup>®</sup>
          </h1>

          <p className="slogan">
            Taste the Tradition 🍽️
          </p>
        </div>

        {/* ===== NAVBAR ===== */}
        <nav className="navbar">

          <Link to="/">🏠 Home</Link>

          <Link to="/veg">🥦 Veg</Link>

          <Link to="/nonveg">🍗 NonVeg</Link>

          <Link to="/chocolates">🍫 Chocolates</Link>

          <Link to="/deserts">🍨 Deserts</Link>

          <Link to="/milk">🥛 Milk</Link>

          <Link to="/signup">📝 Registration</Link>

          <Link to="/orders">📦 Orders</Link>

          <Link to="/login">🔐 Login</Link>

          <Link to="/cart">
            🛒 Cart ({cartItems.length})
          </Link>

        </nav>

      </header>

      {/* ===== ROUTES ===== */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/veg" element={<Veg />} />

        <Route path="/nonveg" element={<NonVeg />} />

        <Route path="/chocolates" element={<Chocolates />} />

        <Route path="/deserts" element={<Deserts />} />

        <Route path="/milk" element={<Milk />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;