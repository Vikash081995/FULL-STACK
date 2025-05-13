import React, { useState, useEffect, useRef } from "react";

const UseRefCase = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(1);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementRef = () => {
    ref.current = ref.current + 1;
  };

  return (
    <div>
      <button onClick={incrementCount}>Count : {count}</button>
      <hr />
      <button onClick={incrementRef}>ref.current:{ref.current}</button>
    </div>
  );
};

export default UseRefCase;
