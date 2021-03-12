import Forecast from "../Forecast/Forecast";

import dayjs from "dayjs";
import "./Info.scss";

function TestsC({ weatherInfo, forecast, setForecast }) {
  let i = 0;
  switch (forecast) {
    case "dayOne":
      i = 1;
      break;
    case "dayTwo":
      i = 2;
      break;
    default:
      i = 0;
  }
  function deleteWidgetClasses() {
    document.querySelector("#widget").className = "";
  }
  if (weatherInfo.current) {
    if (
      weatherInfo.forecast.forecastday[i].day.condition.text.includes("cloudy")
    ) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("cloudy");
    } else if (
      weatherInfo.forecast.forecastday[i].day.condition.text.includes(
        "Sunny"
      ) ||
      weatherInfo.forecast.forecastday[i].day.condition.text.includes("Clear")
    ) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("sunny");
    } else if (
      weatherInfo.forecast.forecastday[i].day.condition.text.includes("snow")
    ) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("snow");
    } else if (
      weatherInfo.forecast.forecastday[i].day.condition.text.includes("rain")
    ) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("rain");
    } else if (
      weatherInfo.forecast.forecastday[i].day.condition.text.includes("storm")
    ) {
      deleteWidgetClasses();
      document.querySelector("#widget").classList.add("storm");
    }
  }

  return (
    <>
      <div className="main">
        <div className="temp-today">
          {weatherInfo.current && i === 0
            ? Math.round(weatherInfo.current.temp_c)
            : weatherInfo.forecast &&
              Math.round(weatherInfo.forecast.forecastday[i].day.avgtemp_c)}
          <div className="cels">°C</div>
        </div>
        <div className="info-today">
          <div className="date-today">
            {weatherInfo.forecast &&
              dayjs(`${weatherInfo.forecast.forecastday[i].date}`).format(
                "ddd D/M/YYYY"
              )}
          </div>
          <div className="location">
            {weatherInfo.location && weatherInfo.location.name}
            {", "}
            {weatherInfo.location && weatherInfo.location.country}
          </div>

          <div className="condition-today">
            {weatherInfo.current &&
              weatherInfo.forecast.forecastday[i].day.condition.text}
          </div>
          <div className="max-min">
            <div className="max-today">
              ↑{" "}
              {weatherInfo.forecast &&
                Math.round(weatherInfo.forecast.forecastday[i].day.maxtemp_c)}
              °C
            </div>
            <div className="min-today">
              ↓{" "}
              {weatherInfo.forecast &&
                Math.round(weatherInfo.forecast.forecastday[i].day.mintemp_c)}
              °C
            </div>
          </div>
        </div>
      </div>
      <Forecast
        weatherInfo={weatherInfo}
        forecast={forecast}
        setForecast={setForecast}
      />
    </>
  );
}
export default TestsC;
