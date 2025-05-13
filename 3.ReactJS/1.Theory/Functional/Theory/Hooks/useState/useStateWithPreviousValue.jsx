import React, { useState } from "react";

function UseStateWithPreviousValue() {
  const [count, setCount] = useState(0);

  const incremenentBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }   
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incremenentBy5}>Increment by 5</button>
    </div>
  );
}

export default UseStateWithPreviousValue;