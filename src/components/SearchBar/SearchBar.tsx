import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Box, Container, InputAdornment, TextField } from "@mui/material";

function SearchBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  //   const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //     color: "inherit",
  //     "& .MuiInputBase-input": {
  //       padding: theme.spacing(1, 1, 1, 0),
  //       // vertical padding + font size from searchIcon
  //       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //       transition: theme.transitions.create("width"),
  //       width: "100%",
  //       [theme.breakpoints.up("md")]: {
  //         width: "20ch",
  //       },
  //     },
  //   }));
  return (
    <Box mt={3}>
      <TextField
        id="outlined-controlled"
        // label="Controlled"
        // value={name}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#E49055" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "100%",
          background: "#F6F6F6",
          border: "#fff !important",
          borderRadius: "10px",
        }}
        // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        //   setName(event.target.value);
        // }}
      />
    </Box>
  );
}

export default SearchBar;
