import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Weather from "../../components/Weather/Weather";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherItem from "../../components/CurrentWeather/CurrentWeather";
import { AppStore } from "../../store/store";

import "./Home.css";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
const Home = (): JSX.Element => {
  const loading = useSelector((state: AppStore) => state.app.isLoading);
  // console.log(loading);

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  return (
    <div>
      {loading && <span>loading...</span>}
      {/* <SearchBar /> */}
      <CurrentWeather />
    </div>
  );
};

export default Home;
