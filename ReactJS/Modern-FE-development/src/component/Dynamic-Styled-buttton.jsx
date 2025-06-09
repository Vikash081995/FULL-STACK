import { useState } from "react";
function DynamicButton() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      style={{
        backgroundColor: isClicked ? "green" : "blue",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      {isClicked ? "Clicked" : "Click me"}
    </button>
  );
}

export default DynamicButton;
