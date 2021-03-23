import React from "react";
import WeatherDetails from "./WeatherDetails";

const Weather = (props) => {
  if (props.item.city === undefined) return null;
  let iconUrl =
    "http://openweathermap.org/img/wn/" +
    props.item.list[0].weather[0].icon +
    "@2x.png";
  return (
    <React.Fragment>
        <h3>{props.item.city.name}</h3>
        <p>Data avser: {props.item.list[0].dt_txt}</p>
        <img src={iconUrl} alt="icon" />
        <p>
          Temperatur: {Math.round((props.item.list[0].main.temp - 273.15) * 100) / 100}°C 
        </p>
        <WeatherDetails item={props.item}/>
    </React.Fragment>
  );
};
export default Weather;
