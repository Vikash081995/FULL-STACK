import React, { useRef, useEffect } from "react";

function Timers() {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <>{intervalRef.current}</>;
}

export default Timers;
