import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels: response.data.main.feels_like,
      tempMin: response.data.main.temp_min,
      tempMax: response.data.main.temp_max,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <>
        <div className="search-container">
          <form id="search-form" autoComplete="off" onSubmit={handleSubmit}>
            <label>
              <input id="search-field" className="search-field" type="search" onChange={handleCityChange}/>
              <input className="search-btn" type="submit" value="Search"/>
            </label>
          </form>
          <button id="current-location" className="current-location-btn">
            <svg className="location-icon" width="32px" height="32px">
              <use href="./symbol-defs.svg#location"></use>
            </svg>
          </button>
          <h1 id="current-city" className="current-city">{weatherData.city}</h1>
        </div>
        <WeatherInfo data={weatherData}/>
      </>
    )
  } else{
    search();
    return "Loading ... ";
  }

};

export default Weather;