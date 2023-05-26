import { useState, useEffect } from "react";
import { fetchLocation } from "../../store/fetchLocation";
import { WeatherItem } from "../../models/WeatherItem.model";

const initialState: WeatherItem = {
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: "",
  sys: {
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  weather: {
    id: 200,
    main: "",
    description: "",
    icon: "",
  },
  wind: {
    deg: 0,
    speed: 0,
  },
};
const useLocation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState<WeatherItem>(initialState);

  const onSetLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    onSearchLocation();
  }, [searchTerm]);

  const onSearchLocation = () => {
    // clearTimeout(onSearch);
    setTimeout(() => {
      fetchLocation(searchTerm).then((res: WeatherItem) => {
        let update = res;
        setSuggestion(update);
        console.log(update);
      });
    }, 100);
  };

  // console.log(suggestion, "ff");

  return { onSetLocation, suggestion, searchTerm };
};

export default useLocation;
