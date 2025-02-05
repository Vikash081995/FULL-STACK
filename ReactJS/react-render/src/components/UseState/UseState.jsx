import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  console.log("useState rendered");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Count 0</button>
      <button onClick={() => setCount(5)}>Count 5</button>
    </div>
  );
}

export default UseState;
