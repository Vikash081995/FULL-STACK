import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Headphones", price: 199 },
];

const ProductList = () => (
  <div>
    <h2>Product List</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
