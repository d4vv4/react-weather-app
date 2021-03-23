import React, { useEffect, useRef, useState } from "react";
import Weather from "./Weather";

const Search = () => {
  const userInput = useRef();
  const [weatherItem, setWeatherItem] = useState({});
  useEffect(() => {
    getWeatherItem();
  }, []);
  const getWeatherItem = () => {
    let input = userInput.current.value;
    if (input === "") {
      input = "stockholm";
    }
    let url =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      input +
      "&appid=2481206d37480266a71649afb73687d9";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setWeatherItem(json);
      });
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <input
            ref={userInput}
            type="text"
            className="form-control w-50"
            placeholder="Sök"
          />
          <button
            onClick={getWeatherItem}
            className="btn btn-outline-primary ml-2"
          >
            Search
          </button>
          <br />
        </div>
        <div className="text-center mt-5">
          <Weather item={weatherItem}  />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
