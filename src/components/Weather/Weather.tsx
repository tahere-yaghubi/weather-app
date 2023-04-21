import * as React from "react";
import Button from "@mui/material/Button";
import { Box, Container, CssBaseline } from "@mui/material";
import WeatherItem from "../CurrentWeather/CurrentWeather";
import "./Weather.css";
import WeatherItemList from "../WeatherItemList/WeatherItemList";

const Weather = (): JSX.Element => {
  return (
    <div className="weather-app">
      <WeatherItem />

      {/* <WeatherItemList /> */}
    </div>
  );
};

export default Weather;
