import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoading, setIsInitial } from "./reducers/appSlice";
import axios from "axios";
import { funcWeatherData } from "../adapters/funcWeatherData";
import { WeatherData } from "../adapters/weatherData.types";

// export const fetchWeatherData = createAsyncThunk(
//   "weather/fetchWeather",
//   async (city: string, { dispatch, rejectWithValue, fulfillWithValue }) => {
//     dispatch(setIsLoading(true));
//     try {
//       // const res = await Promise.all()
//       const res = await Promise.all([funcWeatherData(city)]);
//       dispatch(setIsLoading(false));
//       if (res[0].status == 200) {
//         dispatch(setIsInitial(false));

//         return res;
//       } else {
//         console.log("err");
//       }
//     } catch {}
//   }
// );

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (
    city: string | { lat: number; lng: number },
    { dispatch, rejectWithValue, fulfillWithValue }
  ) => {
    dispatch(setIsLoading(true));

    try {
      const res = await Promise.all([funcWeatherData(city)]);
      dispatch(setIsLoading(false));

      if (res[0].cod === 200) {
        dispatch(setIsInitial(false));
        return res;
      }
      return rejectWithValue(res[0].message);
    } catch {
      dispatch(setIsLoading(false));
      return rejectWithValue("Error");
    }
  }
);

export const transformWeatherData = (
  res: any
): {
  weather: WeatherData;
  // forecast: ExtendedForecastData[];
} => {
  const weather = res[0] as WeatherData;
  weather.weather = res[0].weather[0];
  weather.main = {
    ...weather.main,
    temp: kelvinToCelcius(weather.main.temp),
    feels_like: kelvinToCelcius(weather.main.feels_like),
    temp_max: kelvinToCelcius(weather.main.temp_max),
    temp_min: kelvinToCelcius(weather.main.temp_min),
  };
  weather.wind.speed = Math.round(weather.wind.speed * 3.6);

  return weather;
};
