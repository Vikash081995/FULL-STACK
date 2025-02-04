import React, { useEffect, useState } from "react";

const FunctionLifecycle = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component updated");
  });
  return <div>FunctionLifecycle</div>;
};

export default FunctionLifecycle;
