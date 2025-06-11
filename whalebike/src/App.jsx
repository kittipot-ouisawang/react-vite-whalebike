import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PromotionsPage from './pages/PromotionsPage';
import ContactPage from './pages/ContactPage';
import ShopLocationPage from './pages/ShopLocationPage';
import './App.css'; // You can create this file for specific App styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <div className="header-content">
            <img src='./assets/images/whalebikelogo.png' alt="The Bike Hub Logo" className="logo" /> 
            <h1>Whale Bike</h1>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/promotions">Promotions</Link>
            <Link to="/location">Our Location</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/location" element={<ShopLocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2015 Whale Bike. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;