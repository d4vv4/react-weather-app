import React from "react";

const WeatherDetailsItem = (props) => {
  return props.items.map((item) => {
    let iconUrl =
      "http://openweathermap.org/img/wn/" + item[0].weather[0].icon + "@2x.png";

    let maxTemp = Math.max(...item.map((x) => x.main.temp_max));
    let minTemp = Math.min(...item.map((x) => x.main.temp_max));

    let maxTempRound = Math.round((maxTemp - 273.15) * 100) / 100;
    let minTempRound = Math.round((minTemp - 273.15) * 100) / 100;

    return (
      <li className="list-group-item">
        <p>Datum: {item[0].dt_txt.substr(0, 10)}</p>
        <p>Max temp: {maxTempRound}°C</p>
        <p>Min temp: {minTempRound}°C</p>
        <img src={iconUrl} alt="icon" />
      </li>
    );
  });
};

export default WeatherDetailsItem;
