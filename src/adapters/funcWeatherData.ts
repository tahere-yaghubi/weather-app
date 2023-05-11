const baseUrl = `https://api.openweathermap.org/data/2.5`;
const API = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=de755390daadcf7a29453769e6ee6ba7`;

export const funcWeatherData = async (
  city: string | { lat: number; lng: number }
) => {
  let url = `${baseUrl}/weather?q=${city}&appid=de755390daadcf7a29453769e6ee6ba7`;
  if (typeof city === "object") {
    return url;
  }
  return await (await fetch(url)).json();
};

export const funcCityData = async (search: string) => {
  let url = `${baseUrl}/weather?q=${search}&appid=de755390daadcf7a29453769e6ee6ba7`;
  const res = await (
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        query: search,
        type: "city",
        language: "en",
      }),
    })
  ).json();
};
