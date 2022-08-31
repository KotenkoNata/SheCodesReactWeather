import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

const WeatherInfo = (props) => {

  const [unit, setUnit] = useState(props.data.temperature);
  const [active, setActive] = useState("c");

  function handleDegreeClick(event) {
    event.preventDefault();
    if(event.target.id === "celsius-link"){
      setUnit(props.data.temperature);
      setActive('f');

    }else{
      setUnit(Math.floor(props.data.temperature*1.8 +32));
      setActive('c');
    }
  }


  return (
    <div className="details-container">
      <div className="img-container">
        <img src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} id="main-icon" alt={props.data.description}/>
        <h3 id="weather-title" className="weather-name">
          {props.data.description}
        </h3>
      </div>
      <div className="description-container">
        <div className="date-details-container">
          <FormattedDate date={props.data.date}/>
          <h2 className="time" id="time">{`${props.data.date.getHours() < 10 ? `0${props.data.date.getHours()}` : props.data.date.getHours()} : ${props.data.date.getMinutes() < 10 ? `0${props.data.date.getMinutes()}` : props.data.date.getMinutes()}`}</h2>
        </div>
        <hr/>
        <div className="weather-details-container">
          <div>
            <div className="degree-container">
              <h2 id="degree" className="temperature">
                {Math.round(unit)}
              </h2>
              <span className="degree-celsius">
                            <button id="celsius-link" className={active === "c" ? "active" : ''} onClick={handleDegreeClick}>°C</button> | <button  className={active === "f" ? "active" : ''} onClick={handleDegreeClick} id="fahrenheit-link"
                                                                                         >°F</button>
                        </span>
            </div>

            <ul>
              <li>
                Hi {Math.round(props.data.tempMax)}<span id="max-temp"></span> <sup>o</sup>
              </li>
              <li>
                Lo {Math.round(props.data.tempMin)}<span id="min-temp"></span> <sup>o</sup>
              </li>
            </ul>
          </div>

          <ul className="weather-details-list">
            <li>
              Feels like: {Math.round(props.data.feels)}<span id="feels-temp"></span> <sup>o</sup>
            </li>
            <li>
              Humidity: {Math.round(props.data.humidity)}<span id="humidity"></span> %
            </li>
            <li>
              Wind: {Math.round(props.data.wind)}<span id="wind-speed"></span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo;