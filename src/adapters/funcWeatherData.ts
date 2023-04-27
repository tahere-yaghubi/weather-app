const baseUrl = `https://api.openweathermap.org/data/2.5`;
const API = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=3eb4e7be456c1f8e3e153d9db309c08c`;

export const funcWeatherData = async (
  city: string | { lat: number; lng: number }
) => {
  let url = `${baseUrl}/weather?q=${city}&appid=3eb4e7be456c1f8e3e153d9db309c08c`;
  if (typeof city === "object") {
    return url;
  }
  return await (await fetch(url)).json();
};
