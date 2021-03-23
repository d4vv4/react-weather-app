import React from "react";
import WeatherDetails from "./WeatherDetails";

const Weather = (props) => {
  if (props.item.city === undefined) return null;
  return (
    <React.Fragment>
        <h3>{props.item.city.name}</h3>
        <p>Data avser: {props.item.list[0].dt_txt}</p>
        <p>
          Temperatur: {Math.round((props.item.list[0].main.temp - 273.15) * 100) / 100}°C
        </p>
        <p></p>
        <button className="btn btn-primary">Detaljer</button>
        <WeatherDetails item={props.item}/>
    </React.Fragment>
  );
};
export default Weather;
