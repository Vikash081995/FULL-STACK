import { useState } from "react";
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Milk", price: 5 },
    { id: 2, name: "Egg", price: 8 },
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart([...cart, product]);
  return (
    <div className="container">
      <div className="products-section">
        <h2>Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add</button>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-section">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductList;