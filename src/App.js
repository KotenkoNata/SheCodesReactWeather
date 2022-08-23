import './App.css';
import Search from "./Search";
function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <p>
        <a href={'https://github.com/KotenkoNata/SheCodesReactWeather'}>Open-source code</a>, by Nataliia Kotenko from <a href={'https://www.shecodes.io/'}>She Codes</a>
      </p>
    </div>
  );
}

export default App;
