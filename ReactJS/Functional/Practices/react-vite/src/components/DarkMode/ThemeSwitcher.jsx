import { useState } from "react";

function ThemeSwitcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div style={{ backgroundColor: isDarkTheme ? "black" : "white" }}>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Switch to {isDarkTheme ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
