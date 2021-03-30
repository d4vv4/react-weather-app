import React from "react";
import WeatherDetailsItem from "./WeatherDetailsItem";

const WeatherDetails = (props) => {
  if (!props.item.city) return null;
  
  let todayDay = props.item.list[0].dt_txt.substr(8, 2);
  let IndexOfTomorrow = 0;
  for (let index = 0; index < props.item.list.length; index++) {
    if (
      props.item.list[index].dt_txt.substr(8, 2) == parseInt(todayDay) + 1 ||
      (props.item.list[index].dt_txt.substr(8, 2) == 1 && todayDay != 1)
    ) {
      break;
    }
    IndexOfTomorrow++;
  }
  let forecast1 = getDailyForecast(IndexOfTomorrow);
  let forecast2 = getDailyForecast(IndexOfTomorrow + 8);
  let forecast3 = getDailyForecast(IndexOfTomorrow + 16);
  let forecast4 = getDailyForecast(IndexOfTomorrow + 24);
  let forecast5 = getDailyForecast(IndexOfTomorrow + 32);

  function getDailyForecast(startIndex) {
    return props.item.list.slice(startIndex, startIndex + 8);
  }

  let forecasts = [forecast1, forecast2, forecast3, forecast4, forecast5];

  return (
    <React.Fragment>
      <ul className="list-group">
        <WeatherDetailsItem items={forecasts} />
      </ul>
    </React.Fragment>
  );
};
export default WeatherDetails;
