import React,{useState} from "react";

const Crendering = () => {
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  let content;
  if (isLoggedIn) {
    content = <h1>Welcome User</h1>;
  } else {
    content = <h1>Welcome Guest</h1>;
  }
  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {content}
    </div>
  );
};

export default Crendering;
