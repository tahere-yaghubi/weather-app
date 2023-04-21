import React from "react";
import { Box, Typography } from "@mui/material";

import clear_day from "../../../public/all/clear-day.svg";
import Location from "../Location/Location";
import Temp from "../Temp/Temp";

import "./CurrentWeather.css";
function WeatherItem() {
  return (
    <div className="weather-item">
      <Box
        sx={{
          marginTop: "20px",
          height: "200px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Location />
          <Temp />
        </Box>
        <Box sx={{ width: "100px" }}>
          <img src={clear_day} alt="dd" />
        </Box>

        <div className="weather-item_title"></div>
      </Box>
    </div>
  );
}

export default WeatherItem;
