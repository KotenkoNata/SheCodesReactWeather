const WeatherForecastItem = ({dayWeather}) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function formatDate(timestamp) {
    let date = new Date(timestamp *1000);
    let day = date.getDay();
    return weekDays[day];
  }

  return(
    <li className="week-item">
      <h3>{formatDate(dayWeather.dt)}</h3>
      <img src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}@2x.png`} width="80" alt={dayWeather.weather[0].description}/>
        <ul>
          <li>
            Hi {Math.floor(dayWeather.temp.max)} <sup>o</sup>
          </li>
          <li>
            Lo {Math.floor(dayWeather.temp.min)} <sup>o</sup>
          </li>
        </ul>
    </li>
  )
}

export default WeatherForecastItem;