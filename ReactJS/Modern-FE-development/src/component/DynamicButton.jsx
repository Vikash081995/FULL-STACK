import React, { useState } from "react";

function DynamicButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
      style={{
        backgroundColor: isClicked ? "green" : "blue",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {isClicked ? "Clicked" : "Click me"}
    </button>
  );
}

export default DynamicButton;

