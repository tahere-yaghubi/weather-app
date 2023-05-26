import axios from "axios";
import { WeatherItem } from "../models/WeatherItem.model";

export const fetchLocation = async (location: string) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5`;
  let url = `${baseUrl}/weather?q=${location}&appid=de755390daadcf7a29453769e6ee6ba7`;

  const fetchUrlRs = await axios
    .get(url)
    .then((res) => {
      if (res?.status == 200) {
        return res.data;
      }
    })
    .catch((err: string) => console.error(err));

  return fetchUrlRs;
};
