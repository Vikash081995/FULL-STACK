import Button from "./component/Button";
import React, { useState } from "react";
import Product from "./Products/Products";

const App = () => {
  const [price, setPrice] = useState(100);
  // const handleAddToCart = () => {
  //   console.log("Item added to cart");
  // };

  // const handleCheckout = () => {
  //   console.log("Proceeding to checkout");
  // };


  const increasePrice = () => setPrice(price+10)
  return (
    <div>
      <Product price={price} />
     <Button onClick={increasePrice}>Increase Price</Button>
    </div>
  );
};

export default App;
