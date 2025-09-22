import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "blue",
    secondary: "gray",
  },
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Click Me</Button>
    </ThemeProvider>
  );
};
