/* eslint-disable react/prop-types */
import { useState } from "react";
// import ChildOne from "./ChildOne";

const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("Parentone Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      {children}
    </div>
  );
};

export default ParentOne;
