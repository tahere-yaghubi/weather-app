import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { fetchLocation } from "../../store/fetchLocation";
import axios from "axios";
import useLocation from "../../hooks/services/useLocation";

const SearchBar = () => {
  const { onSetLocation, suggestion, searchTerm } = useLocation();
  return (
    <Box mt={3}>
      <TextField
        id="outlined-controlled"
        // label="Controlled"
        value={searchTerm}
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
        onChange={onSetLocation}
      />
    </Box>
  );
};

export default SearchBar;
