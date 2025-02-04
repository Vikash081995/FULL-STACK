import React, { useState } from "react";

const Controlled = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="type text"
    />
  );
};

export default Controlled;
