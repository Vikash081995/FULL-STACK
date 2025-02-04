import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Parent component</p>
      <Child onIncrement={handleIncrement} />
    </div>
  );
}
