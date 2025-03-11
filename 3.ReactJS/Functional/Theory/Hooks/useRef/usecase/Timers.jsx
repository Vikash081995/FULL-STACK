import { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current); // Cleanup interval
  }, []);

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}

export default Timer;
