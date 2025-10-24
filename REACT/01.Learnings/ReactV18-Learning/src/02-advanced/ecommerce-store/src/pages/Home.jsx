// 📚 CONCEPT: Home Page with Hero Section
// This page demonstrates landing page design and featured products

import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  const { products } = useProducts();

  // 📚 CONCEPT: Array Methods for Data Manipulation
  // Get featured products (top rated)
  const featuredProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="home">
      {/* 📚 CONCEPT: Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ReactStore</h1>
          <p>Discover amazing products at great prices</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">🛍️</div>
        </div>
      </section>

      {/* 📚 CONCEPT: Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="view-all-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 📚 CONCEPT: Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose ReactStore?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is safe and secure</p>
            </div>
            <div className="feature">
              <div className="feature-icon">↩️</div>
              <h3>Easy Returns</h3>
              <p>30-day return policy for all products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

/* 🎯 KEY LEARNING POINTS:
   1. Page Components - Full page layouts
   2. Data Manipulation - Sorting and filtering
   3. Hero Sections - Landing page design
   4. Component Reuse - Using ProductCard
   5. Section Layout - Organized content sections
   6. Call-to-Action - Encouraging user interaction
*/
