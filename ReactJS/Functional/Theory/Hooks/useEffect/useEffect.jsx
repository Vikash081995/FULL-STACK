import React, { useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect-updating documents");
    document.title = `You clicked ${count} times`;
  }, [count]);
  
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}

export default UseEffectExample;
