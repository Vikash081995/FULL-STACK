/* eslint-disable react/prop-types */
import React from "react";

const ChildTwo = ({ name }) => {
  console.log("Child Render");

  return <h1>Child Component-{name}</h1>;
};

export default ChildTwo;

export const MemoizedChildTwo = React.memo(ChildTwo);
