import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastItem from "./WeatherForecastItem";

const WeatherForecast = (props) => {

  const[loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(()=>{
    setLoaded(false);
  }, [props])

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if(loaded){
    return (
      <>
        <hr/>
        <div>
          <ul id="week-forecast" className="week-list">
            {forecast.map((item, index)=>{
              if(index<=6){
                return <WeatherForecastItem dayWeather={item} key={index}/>
              }
              return null;
            })}
          </ul>
        </div>
      </>
    )

  }else{
    const key = "a83f619db0bf9e35a21b85c461d75e1d";
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${key}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return null;
  }


}

export default WeatherForecast;

