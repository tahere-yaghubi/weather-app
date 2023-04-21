import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./Header.css";

const Header = (): JSX.Element => {
  return (
    <Box
      width={"100%"}
      sx={{
        padding: "1rem 2rem",
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" component="h3">
        Weather App
      </Typography>
    </Box>
  );
};
export default Header;
