import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

function ProductList() {
  const [products, setProducts] = useState(productsData);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      price: (products.length + 1) * 100,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <button onClick={addProduct}>Add product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
