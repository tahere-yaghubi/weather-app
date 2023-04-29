import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { WiStrongWind, WiRaindrop, WiUmbrella } from "weather-icons-react";
import clear_day from "../../assets/all/clear-day.svg";

import "./CurrentWeather.css";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/store";
const CurrentWeather = (): JSX.Element => {
  const { weather, isError, isInitial } = useSelector((store: AppStore) => ({
    weather: store.weather.weatherData,
    isError: store.weather.isError,
    isInitial: store.app.isInitial,
  }));
  // const { name, main, system, weather, wind } = weather;
  console.log(weather);

  useEffect(() => {
    if (isError) {
      console.log("No Data found for this area");
    }
  }, [isError]);
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
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
            sx={{ marginBottom: "3px", padding: "7px" }}
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
          <Typography component="h5" variant="h5" sx={{ padding: "7px" }}>
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
          <Typography component="h5" variant="h5" sx={{ padding: "7px" }}>
            73
          </Typography>
          <Typography variant="subtitle1" ml={1}>
            %
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
