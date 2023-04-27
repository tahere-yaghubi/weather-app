import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Weather from "../../components/Weather/Weather";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherItem from "../../components/CurrentWeather/CurrentWeather";
import { AppStore } from "../../store/store";

import "./Home.css";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import { fetchWeatherData } from "../../store/fetchWeather";
import { Container } from "@mui/material";
const Home = (): JSX.Element => {
  const loading = useSelector((state: AppStore) => state.app.isLoading);
  // console.log(loading);
  useEffect(() => {
    fetchWeatherData("Rome");
  }, []);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  return (
    <Container maxWidth="sm">
      <div>
        {loading && <span>loading...</span>}
        {/* <SearchBar /> */}
        <CurrentWeather />
      </div>
    </Container>
  );
};

export default Home;
