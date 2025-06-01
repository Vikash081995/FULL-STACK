import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme }}>
      <h1>Theme Component</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
};
export default ThemeComponent;  