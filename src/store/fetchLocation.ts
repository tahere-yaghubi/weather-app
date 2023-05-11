import axios from "axios";

export const fetchLocation = (location: string) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5`;
  let url = `${baseUrl}/weather?q=${location}&appid=de755390daadcf7a29453769e6ee6ba7`;

  axios
    .get(url)
    .then((res) => {
      if (res?.data) {
        console.log(res.data);
      }
    })
    .catch((err: string) => console.error(err));
  return location;
};
