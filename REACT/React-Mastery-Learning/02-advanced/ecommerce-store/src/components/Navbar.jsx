// 📚 CONCEPT: Navigation Component with Context
// This component demonstrates using context and routing

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  // 📚 CONCEPT: Active Route Detection
  // We can determine which page is currently active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🛍️ ReactStore
        </Link>

        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`navbar-link ${isActive("/products") ? "active" : ""}`}
          >
            Products
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-link">
            🛒 Cart
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

/* 🎯 KEY LEARNING POINTS:
   1. Context Usage - Using useCart hook
   2. Routing - Link components for navigation
   3. Active States - Highlighting current page
   4. Conditional Rendering - Showing cart badge
   5. Component Composition - Organized navigation structure
*/
