import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import WeatherItem from "../CurrentWeather/CurrentWeather";

function WeatherItemList() {
  return (
    <Box>
      <List style={{ display: "flex", flexDirection: "row", margin: "0 auto" }}>
        <ListItem>
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
        </ListItem>
      </List>
    </Box>
  );
}

export default WeatherItemList;
