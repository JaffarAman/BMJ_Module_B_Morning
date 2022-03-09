import React, { useEffect, useState } from "react";
import "./weatherApp.css";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("new york");
  const [locationCity, setLocationCity] = useState({});
  const [searchCityState, setSearchCityState] = useState("");

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            console.log(position);
            setLocationCity(position);
            setCityName("");
          },
          function (error) {
            console.log("error", error);
            setSearchCityState(cityName);
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
    getLocation();
  }, []);

  useEffect(() => {
    let searchQuery =
      locationCity && locationCity.coords
        ? `lat=${locationCity.coords.latitude}&lon=${locationCity.coords.longitude}`
        : `q=${searchCityState ? searchCityState : cityName}`;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?${searchQuery}&appid=69e67c8bdadf637986d2a5ad89d314c4&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeatherData(result);
      })
      .catch((err) => {
        console.log("0rrr", err);
      });
  }, [searchCityState, locationCity]);

  const searchCity = (e) => {
    setSearchCityState(cityName);
    setLocationCity({});
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
      <div className="listBox">
        <li>CITY: {weatherData && weatherData.name} </li>
        <li>
          TEMP: {weatherData && weatherData.main && weatherData.main.temp}
        </li>
        <li>
          Condition:
          {/* {weatherData &&
            weatherData.weather &&
            weatherData.weather[0] &&
            weatherData.weather[0].main} */}
          {weatherData?.weather && weatherData?.weather[0]?.main}
        </li>
      </div>
    </div>
  );
};

export default WeatherApp;
