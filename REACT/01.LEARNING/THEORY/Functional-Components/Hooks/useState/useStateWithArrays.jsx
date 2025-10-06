import { useState } from "react";

function UseStateWithArrays() {
  const [items, seItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItems}>Add an item in the list </button>
      <ul>
        {items.map((item, index) => {
          <li kye={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseStateWithArrays;
