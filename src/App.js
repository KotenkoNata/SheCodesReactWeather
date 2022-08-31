import './App.css';
import Search from "./components/WeatherInfo";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="weather-container">
      <Weather defaultCity="New York"/>
      </div>
    </div>
    </div>
  );
}

export default App;
