import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [text, setText] = useState("");

  const handleTextSubmit = (text) => {
    setText(text);
  };

  return (
    <>
      <ChildComponent onSubmit={handleTextSubmit} />;
      <p>Text from Child: {text}</p>
    </>
  );
}
