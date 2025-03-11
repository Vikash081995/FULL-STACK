import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeContext from "../../ContextApi/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
