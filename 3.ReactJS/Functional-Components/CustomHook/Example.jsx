import React from "react";
import { useKeyPress } from "./useKeyPress";

function Example() {
  useKeyPress("Enter", () => {
    console.log("Enter key pressed");
  });
  return <div>Example</div>;
}

export default Example;
