const baseUrl = `https://api.openweathermap.org/data/2.5`;

const fetchWeatherData = async (city: string) => {
  let url = `${baseUrl}/weather?q=${city}&appid=3eb4e7be456c1f8e3e153d9db309c08c`;
  if (typeof city === "object") {
    return url;
  }
  return await (await fetch(url)).json();
};










const API = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=3eb4e7be456c1f8e3e153d9db309c08c`;
