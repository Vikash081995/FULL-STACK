import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (action, state) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function BasicExampleReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}

export default BasicExampleReducer;
