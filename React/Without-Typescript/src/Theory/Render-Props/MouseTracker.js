import React, { useState } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <h1>Mouse Tracker</h1>
      {render(position)}
    </div>
  );
};

export default MouseTracker;
