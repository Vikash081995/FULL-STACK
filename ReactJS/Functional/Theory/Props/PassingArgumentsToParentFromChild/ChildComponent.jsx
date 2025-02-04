import { useState } from "react";

function ChildComponent({ onSubmit }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    onSubmit(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ChildComponent;
