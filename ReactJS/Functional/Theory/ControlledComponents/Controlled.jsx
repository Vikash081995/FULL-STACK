import React, { useState } from "react";

const Controlled = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputValue);
  }
  return (
    <form onSubmit={handleSubmit}>

    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="type text"
      />
      </form>
  );
};

export default Controlled;
