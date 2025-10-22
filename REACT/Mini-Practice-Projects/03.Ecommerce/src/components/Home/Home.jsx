import React from "react";
import "./Home.css";
import Product from "../products/product";

const ProductData = [
  {
    id: "123",
    name: "Product 1",
    description: "Product 1 description",
    price: 100,
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
  },
  {
    id: "124",
    name: "Product 2",
    description: "Product 2 description",
    price: 200,
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
  },
  {
    id: "124",
    name: "Product 3",
    description: "Product 3 description",
    price: 200,
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
  },
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero_section">
        <div className="hero_content">
          <h1 className="hero_title">Welcome to eShop</h1>
          <p className="hero_subtitle">
            Discover amazing products at unbeatable prices
          </p>
          <button className="hero_button">Shop Now</button>
        </div>
      </div>

      {/* Product Section */}
      <div className="product_section">
        <h2 className="product_section_title">Featured Products</h2>
        {ProductData.map((product) => {
          return (
            <div key={product.id}>
              <Product
                name={product.name}
                id={product.id}
                description={product.description}
                price={product.price}
                imgSrc={product.imgSrc}
              />
            </div>
          );
        })}
      </div>

      {/* Features Section */}
      <div className="features_section">
        <div className="features_container">
          <div className="feature_card">
            <div className="feature_icon">🚚</div>
            <h3 className="feature_title">Free Shipping</h3>
            <p className="feature_description">
              Free shipping on orders over $50. Fast and reliable delivery to
              your doorstep.
            </p>
          </div>
          <div className="feature_card">
            <div className="feature_icon">🔒</div>
            <h3 className="feature_title">Secure Payment</h3>
            <p className="feature_description">
              Your payment information is safe and secure with our encrypted
              checkout process.
            </p>
          </div>
          <div className="feature_card">
            <div className="feature_icon">↩️</div>
            <h3 className="feature_title">Easy Returns</h3>
            <p className="feature_description">
              30-day return policy. If you're not satisfied, we'll make it
              right.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter_section">
        <div className="newsletter_content">
          <h2 className="newsletter_title">Stay Updated</h2>
          <p className="newsletter_subtitle">
            Subscribe to our newsletter for the latest deals and updates
          </p>
          <form className="newsletter_form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter_input"
              required
            />
            <button type="submit" className="newsletter_button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
