import React, { useRef, useEffect } from "react";

function useRefEg() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return <input type="text" ref={ref} />;
}

export default useRefEg;
