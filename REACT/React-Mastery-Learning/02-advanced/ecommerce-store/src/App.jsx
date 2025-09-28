// 📚 CONCEPT: Advanced React App with Routing
// This app demonstrates routing, context, and complex state management

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
          </div>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;

/* 🎯 KEY LEARNING POINTS:
   1. React Router - Multi-page application
   2. Context Providers - Global state management
   3. Nested Providers - Multiple contexts
   4. Route Structure - Organized routing
   5. Component Composition - Layout with routes
*/
