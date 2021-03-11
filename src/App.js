import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import TestsC from "./components/TestsC/TestsC";
import axios from "axios";
import $ from "jquery";
import "./App.scss";

function App() {
  const [isFetched, setIsFetched] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [location, setLocation] = useState("bursa");
  const [city, setCity] = useState("");
  const [alert, setAlert] = useState({
    msg: "",
    type: "",
    icon: "",
    visible: false,
  });
  const params = {
    key: "f86435eef77c4a73bfc94342210703",
    location,
  };
  async function fetchData() {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${params.key}&q=${params.location}&days=4`
      )
      .then((resp) => {
        setWeatherInfo(resp.data);
        setIsFetched(true);
        checkData(resp);
      });
  }
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1);
  }, [location]);

  const checkData = (data) => {
    if (!data.error) {
      setAlert({
        msg: "Keep calm everything is ok",
        type: "success",
        icon: "fas fa-thumbs-up",
        visible: true,
      });
    } else {
      setAlert({
        msg: "Please Check The Value",
        type: "warning",
        icon: "fas fa-exclamation-circle",
        visible: true,
      });
    }
  };
  function deleteWidgetClasses() {
    document.querySelector("#widget").className = "";
  }
  if (weatherInfo.current) {
    const background = "rain";
    if (weatherInfo.current.condition.text.includes("cloudy")) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("cloudy");
    } else if (weatherInfo.current.condition.text.includes("Sunny")) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("sunny");
    } else if (weatherInfo.current.condition.text.includes("snow")) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("snow");
    } else if (weatherInfo.current.condition.text.includes("rain")) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("rain");
    } else if (weatherInfo.current.condition.text.includes("storm")) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("storm");
    }
  }

  return (
    <div className="App">
      <div id="widget" className="">
        <Search
          city={city}
          setCity={setCity}
          location={location}
          setLocation={setLocation}
        />
        <TestsC weatherInfo={weatherInfo} />
      </div>
      {/* <Card weatherInfo={weatherInfo} /> */}
      {/* <input
        type="text"
        placeholder="Search for a city"
        onKeyDown={(e) => {
          e.key == "Enter" && setLocation(city);
        }}
        onChange={(e) => setCity(e.target.value)}
      ></input> */}

      {/*  <Card weatherInfo={weatherInfo} /> */}
    </div>
  );
}

export default App;
