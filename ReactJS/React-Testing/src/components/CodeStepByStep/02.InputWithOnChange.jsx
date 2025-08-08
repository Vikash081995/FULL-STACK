import React, { useState } from "react";

const InputWithOnChange = () => {
  const [data, setData] = useState("");

  return (
    <div>
      <h1>Test onChange Event with Input Text</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default InputWithOnChange;
