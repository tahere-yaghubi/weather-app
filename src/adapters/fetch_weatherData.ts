import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoading, setInitial } from "../store/reducers/appSlice";
import axios from "axios";
import { funcWeatherData } from "./weatherData";
export const fetch_weatherData = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { dispatch, rejectWithValue, fulfillWithValue }) => {
    dispatch(dispatch(setIsLoading(true)));
    try {
      // const res = await Promise.all()
      const res = await funcWeatherData(city);
      dispatch(dispatch(setIsLoading(false)));
      if (res.status == 200) {
        dispatch(setInitial(false));
        console.log(true);
        console.log(res, "res");
      } else {
        console.log("err");
      }
    } catch {}
  }
);
