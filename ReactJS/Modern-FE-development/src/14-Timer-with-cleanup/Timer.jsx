import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerId);
  }, []);

  return <h1>{time.toLocaleTimeString()}</h1>;
};
