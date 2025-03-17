import React from "react";
import MouseTracker from "./MouseTracker";

const RenderPropsExample = ({ render }) => {
  return (
    <MouseTracker
      render={(position) => {
        <p>
          MouseTracker: {position.x} ,{position.y}
        </p>;
      }}
    />
  );
};

export default RenderPropsExample;
