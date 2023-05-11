import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { fetchLocation } from "../../store/fetchLocation";
import axios from "axios";

const SearchBar = () => {
  const suggestionRef = useRef(null);
  const [location, setLocation] = useState("");
  // const [suggestion, setSuggestion] = useState<string[]>([]);
  // const [showSuggestion, setShowSuggestion] = useState(false);

  const baseUrl = `https://api.openweathermap.org/data/2.5`;
  let url = `${baseUrl}/weather?q=${location}&appid=de755390daadcf7a29453769e6ee6ba7`;

  const onsetLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  // const fetchLocation = (location: string) => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       if (res?.data) {
  //         console.log(res.data);
  //       }
  //     })
  //     .catch((err: string) => console.error(err));
  // };
  console.log(location, "location");

  useEffect(() => {
    if (!location) {
      return;
    }
    fetchLocation(location);
  }, [location]);

  return (
    <Box mt={3}>
      <TextField
        id="outlined-controlled"
        // label="Controlled"
        value={location}
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
        onChange={onsetLocation}
      />
    </Box>
  );
};

export default SearchBar;
