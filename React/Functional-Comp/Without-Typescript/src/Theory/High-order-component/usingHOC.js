import React from "react";
import WithLogger from "./HighOrderComponent";

const UseCaseHOC = () => {
  return <div>UseCaseHOC</div>;
};

const enhancedComponent = WithLogger(UseCaseHOC);
export default enhancedComponent;
