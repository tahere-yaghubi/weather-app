import React from "react";
import { Box, Typography } from "@mui/material";

import { WiStrongWind, WiRaindrop, WiUmbrella } from "weather-icons-react";
import clear_day from "../../../public/all/clear-day.svg";
import Location from "../Location/Location";
import Temp from "../Temp/Temp";

import "./CurrentWeather.css";
function CurrentWeather() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100 %",
        // border: "1px solid #333",
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "600px",
          justifyContent: "space-between",
          // border: "1px solid #333",
        }}
      >
        <Typography component="h5" variant="h5" fontStyle={"italic"}>
          Kiel, Germany
        </Typography>
        <Typography color={"#949399"}>light rain</Typography>
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "600px",
          justifyContent: "space-between",
          // border: "1px solid #333",
        }}
      >
        <Box sx={{ width: "200px" }}>
          <img src={clear_day} alt="dd" />
        </Box>
        <Box>
          <Typography component="h5" variant="h1">
            16{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WiStrongWind size={24} color="#000" />

            <Typography
              component="h5"
              variant="h5"
              sx={{ marginBottom: "3px" }}
            >
              23
            </Typography>
            <Typography variant="subtitle1" ml={1}>
              km/h
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WiUmbrella size={24} color="#000" />
            <Typography
              component="h5"
              variant="h5"
              sx={{ marginBottom: "3px" }}
            >
              79
            </Typography>
            <Typography variant="subtitle1" ml={1}>
              %
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WiRaindrop size={24} color="#000" />
            <Typography
              component="h5"
              variant="h5"
              sx={{ marginBottom: "3px" }}
            >
              73
            </Typography>
            <Typography variant="subtitle1" ml={1}>
              %
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CurrentWeather;
