import React, { useState } from "react";
import MemoizedUserProfile from "./UserProfile";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [user] = useState({
    name: "John Doe",
    age: 30,
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <MemoizedUserProfile name={user.name} age={user.age} />
    </div>
  );
}

export default ParentComponent;