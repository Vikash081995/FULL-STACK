import { useEffect } from "react";

export function useKeyPress(targetKey, callback) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === targetKey) {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [targetKey, callback]);

}

