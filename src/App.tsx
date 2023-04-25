import { ThemeProvider } from "@mui/material";
import "./styles/index.css";
import Home from "./pages/Home/Home";
const theme = false;
const App = (): JSX.Element => {
  return (
    // <ThemeProvider theme={theme}>
    <main>
      <Home />
    </main>
    // </ThemeProvider>
  );
};

export default App;
