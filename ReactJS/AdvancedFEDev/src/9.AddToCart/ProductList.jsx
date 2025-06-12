import { useState } from "react";

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Milk", price: 5 },
    { id: 2, name: "Egg", price: 8 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <div>
        <h2>Products</h2>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
              <button onClick={() => addToCart(product)}>add</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-section">
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </div>
    </div>
  );
};
