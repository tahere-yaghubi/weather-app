import { createTheme } from "@mui/material";
import { amber, blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[100],
    },
    secondary: {
      main: amber[400],
    },
  },
});
