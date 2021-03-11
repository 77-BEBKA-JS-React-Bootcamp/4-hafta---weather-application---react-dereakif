import Forecast from "./../Forecast/Forecast";
import $ from "jquery";

import dayjs from "dayjs";
import "./TestsC.scss";

function TestsC({ weatherInfo }) {
  console.log({ weatherInfo }); /* 
  $(".widget").classList.add("sunny"); */
  /*  if (weatherInfo.current) {
    if (weatherInfo.current.condition.text.includes("cloud")) {
      $(".widget").classList.add("cloudy");
    } else if (weatherInfo.current.condition.text.includes("sunny")) {
      $(".widget").classList.add("sunny");
    }
  } */
  return (
    <>
      <div className="main">
        <div className="temp-today">
          {weatherInfo.current && Math.round(weatherInfo.current.temp_c)}
          <div className="cels">°C</div>
        </div>
        <div className="info-today">
          <div className="date-today">{dayjs().format("ddd D/M/YYYY")}</div>
          <div className="location">
            {weatherInfo.location && weatherInfo.location.name}
          </div>

          <div className="condition-today">
            {weatherInfo.current && weatherInfo.current.condition.text}
          </div>
          <div className="max-min">
            <div className="max-today">
              ↑{" "}
              {weatherInfo.forecast &&
                Math.round(weatherInfo.forecast.forecastday[0].day.maxtemp_c)}
              °C
            </div>
            <div className="min-today">
              ↓{" "}
              {weatherInfo.forecast &&
                Math.round(weatherInfo.forecast.forecastday[0].day.mintemp_c)}
              °C
            </div>
          </div>
        </div>

        {/* <img
        src={weatherInfo.current && weatherInfo.current.condition.icon}
      ></img> */}
      </div>
      <Forecast weatherInfo={weatherInfo} />
    </>
  );
}
export default TestsC;
