import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Weather from "../../components/Weather/Weather";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherItem from "../../components/CurrentWeather/CurrentWeather";

import "./Home.css";
const Home = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  return (
    <div>
      <SearchBar />
      <WeatherItem />
    </div>
  );
};

export default Home;
