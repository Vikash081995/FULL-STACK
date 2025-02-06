/* eslint-disable react/prop-types */
import { useState, createContext } from "react";


export const CountContext = createContext();
const CountContextProvider = CountContext.Provider;

function ContextParent({children}) {
  const [count, setCount] = useState(0);
  console.log("ContextParent");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <CountContextProvider value={count}>
        {children}
      </CountContextProvider>
    </>
  );
}

export default ContextParent;
