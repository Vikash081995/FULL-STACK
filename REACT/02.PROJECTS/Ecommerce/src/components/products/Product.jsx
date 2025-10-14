import React from "react";
import "./Product.css";

function Product({ name, description, price, imgSrc }) {
  return (
    <div className="product_container">
      <img src={imgSrc} alt={name} className="product__img" />
      <div className="product_content">
        <h1 className="product_name">{name}</h1>
        <p className="product_description">{description}</p>
        <p className="product_price">{price}</p>
        <button className="product_add_to_cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
