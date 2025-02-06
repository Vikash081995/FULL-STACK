import React from "react";
import { useContext } from "react";
import { CountContext } from "./ContextParent";
export const ChildA = () => {
  console.log("ChildA");
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA = React.memo(ChildA);
export const ChildB = () => {
  console.log("ChildB");
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("ChildC");
  return (
    <>
      <div>Child C count ={count}</div>
    </>
  );
};
