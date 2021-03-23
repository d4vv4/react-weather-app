import React from "react";

const WeatherDetails = (props) => {
  let key = 0;
  let iconUrl =
    "http://openweathermap.org/img/wn/" +
    props.item.list[key].weather[key].icon +
    ".png";
  let todayDay = props.item.list[key].dt_txt.substr(8, 2);
  let IndexOfTomorrow = 0;
  for (let index = 0; index < props.item.list.length; index++) {
    if (props.item.list[index].dt_txt.substr(8, 2) == parseInt(todayDay) + 1) {
      break;
    }
    IndexOfTomorrow++;
  }
  let forecastNow = props.item.list[0];
  let forecast1 = getDailyForecast(IndexOfTomorrow);
  let forecast2 = getDailyForecast(IndexOfTomorrow+8);
  let forecast3 = getDailyForecast(IndexOfTomorrow+16);
  let forecast4 = getDailyForecast(IndexOfTomorrow+24);
  let forecast5 = getDailyForecast(IndexOfTomorrow+32);

  function getDailyForecast(startIndex) {
    return props.item.list.slice(startIndex,startIndex + 8);
  }
  return (
    <React.Fragment>
      <p>
        {Math.round((forecastNow.main.temp_min - 273.15) * 100) / 100}
      </p>
      <p>
        {Math.round((forecastNow.main.temp_max - 273.15) * 100) / 100}
      </p>
      <img src={iconUrl} alt="icon"/>
      <p>{todayDay}</p>
    </React.Fragment>
  );
};
export default WeatherDetails;
