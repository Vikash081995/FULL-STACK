import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
const ThemeApp = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>useContext+useReducer</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default ThemeApp;
