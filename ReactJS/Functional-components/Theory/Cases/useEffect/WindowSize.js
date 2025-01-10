import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const [size, setSize] = useState(getSize());

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    function handleSize() {
      setSize(getSize());
    }
    window.addEventListener("resize", handleSize);

    //cleaning up side effects
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <p>
      Width: {size.width} Height: {size.height}
    </p>
  );
};

export default WindowSize;
