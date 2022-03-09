import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("karachi");
  const [searchCityState, setSearchCityState] = useState("karachi");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&appid={API KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      })
      .catch((err) => {
        console.log("0rrr", err);
      });
  }, [cityName]);

  const searchCity = (e) => {
    setSearchCityState(cityName);
  };
  return (
    <div>
      <h1>WeatherApp</h1>
      <div
        className="d-flex justify-content-center my-5"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <input
          type="text"
          value={cityName}
          className="form-group form-control w-50"
          placeholder="Enter City name"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={searchCity} className="btn btn-info">
          search
        </button>
      </div>
      {/* <button>CALL API</button> */}
      <li>CITY: {weatherData && weatherData.name} </li>
      <li>TEMP: {weatherData && weatherData.main && weatherData.main.temp} </li>
      <li>
        Condition:{" "}
        {weatherData &&
          weatherData.weather &&
          weatherData.weather[0] &&
          weatherData.weather[0].main}
      </li>
    </div>
  );
};

export default WeatherApp;
