import { useReducer, useContext, createContext } from "react";

const CountContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};

export const Parent = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <Child />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </CountContext.Provider>
  );
};

const Child = () => {
  const { count } = useContext(CountContext);
  console.log("Child Rendered");
  return <h2>Count: {count}</h2>;
};
