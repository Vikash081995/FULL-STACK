import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#60a5fa",
    muted: "#a0aec0",
  },
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
`;

const ThemeDemo = () => {
  <ThemeProvider theme={theme}>
    <Button>Click me</Button>
  </ThemeProvider>;
};

export default ThemeDemo;