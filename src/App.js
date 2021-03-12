import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import Info from "./components/Info/Info";
import axios from "axios";
import "./App.scss";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [location, setLocation] = useState("london");
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState("dayZero");

  const params = {
    key: "f86435eef77c4a73bfc94342210703",
    location,
  };

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${params.key}&q=${params.location}&days=4`
      )
      .then((resp) => {
        setWeatherInfo(resp.data);
      });
  }, [location]);

  return (
    <div className="App">
      <div id="widget" className="">
        <Search
          city={city}
          setCity={setCity}
          location={location}
          setLocation={setLocation}
        />
        <Info
          weatherInfo={weatherInfo}
          forecast={forecast}
          setForecast={setForecast}
        />
      </div>
    </div>
  );
}

export default App;
