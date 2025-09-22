import React from "react";
import styles from "../styles/ProductDetail.module.css";
import product from "../data/product.json";

const ProductDetails = () => (
  <div className={styles.container}>
    <img src={product.image} alt={product.name} className={styles.image} />
    <div className={styles.info}>
      <h1>{product.name}</h1>
      <p className={styles.price}>${product.price}</p>
      <p>{product.description}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  </div>
);

export default ProductDetails;
