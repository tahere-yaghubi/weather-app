import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoading, setInitial } from "../store/reducers/appSlice";
import axios from "axios";
import { funcWeatherData } from "./weatherData";
import { weatherData } from "./weatherData.types";
export const fetch_weatherData = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { dispatch, rejectWithValue, fulfillWithValue }) => {
    dispatch(setIsLoading(true));
    try {
      // const res = await Promise.all()
      const res = await Promise.all([funcWeatherData(city)]);
      dispatch(setIsLoading(false));
      if (res[0].status == 200) {
        dispatch(setInitial(false));
       
      return res
      } else {
        console.log("err");
      }
    } catch {}
  }
);


// const transformWeather =(res : any):{
//   weather : weatherData;
// }=>{
// const weather = weather[0] as weatherData;
// weather.weather = res[0].weather[0],
// weather.main = {}
// }
