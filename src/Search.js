import React, { useState } from "react";
import axios from "axios";

const Search = function () {
  const [inputValue, setInputValue] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [responseAPI, setResponseAPI] = useState({});

  function updateValue(event) {
    setInputValue(event.target.value);
  }

  function displayWeather(response) {
    console.log(`response`, response);
    setLoaded(true);
    setResponseAPI({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      desc: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`inputValue`, inputValue);

    let apiKey = "a83f619db0bf9e35a21b85c461d75e1d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={updateValue}
        placeholder="Type a city ..."
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(responseAPI.temperature)}°C</li>
          <li>Description: {responseAPI.description}</li>
          <li>Humidity: {responseAPI.humidity}%</li>
          <li>Wind: {responseAPI.wind}km/h</li>
          <li>
            <img src={responseAPI.icon} alt={responseAPI.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
};

export default Search;
