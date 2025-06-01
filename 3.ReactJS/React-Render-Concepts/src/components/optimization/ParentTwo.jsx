/* eslint-disable react/prop-types */
import { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");

  console.log("Parentone Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("coder")}>Change Name</button>
      <MemoizedChildTwo name={name} />
    </div>
  );
};

export default ParentTwo;
