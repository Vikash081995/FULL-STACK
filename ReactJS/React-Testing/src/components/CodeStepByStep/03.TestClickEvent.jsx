import React from "react";

function TestClickEvent() {
  const [data, setData] = React.useState("");
  return (
    <div>
      <h1>Test Click Event with Button</h1>
      <button onClick={() => setData("Hello")}>Update Data </button>
      <h1>{data}</h1>
    </div>
  );
}

export default TestClickEvent;
