import React, { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <label>Controlled Component</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="type here...."
      />
    </>
  );
};

export default ControlledComponent;
