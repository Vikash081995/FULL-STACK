// 📚 CONCEPT: Reusable Product Card Component
// This component demonstrates props, context usage, and event handling

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  // 📚 CONCEPT: Event Handler with Parameters
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking button
    addToCart(product);
  };

  // 📚 CONCEPT: Star Rating Display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-overlay">
            <span className="view-details">View Details</span>
          </div>
        </div>
      </Link>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-text">({product.rating})</span>
        </div>

        <div className="product-price">${product.price.toFixed(2)}</div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

/* 🎯 KEY LEARNING POINTS:
   1. Props - Receiving product data
   2. Context Usage - Using cart context
   3. Event Handling - Preventing default behavior
   4. Dynamic Content - Star rating display
   5. Component Reusability - Can be used anywhere
   6. Link Navigation - Routing to product details
*/
