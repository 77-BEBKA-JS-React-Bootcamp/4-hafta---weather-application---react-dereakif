import "./Forecast.scss";
import dayjs from "dayjs";

function Forecast({ weatherInfo, forecast, setForecast }) {
  const clickHandler = (e) => {
    setForecast(e.target.parentNode.id);
  };

  return (
    <div className="forecast">
      <div id="dayZero" class="day" onClick={clickHandler}>
        <div className="day-name">Today</div>
        <img
          alt="codition-icon"
          className="condition-icon"
          src={
            weatherInfo.forecast &&
            weatherInfo.forecast.forecastday[0].day.condition.icon
          }
        ></img>{" "}
        <span class="highTemp">
          {weatherInfo.forecast &&
            Math.floor(weatherInfo.forecast.forecastday[0].day.maxtemp_c)}
          °C
        </span>{" "}
        <span class="lowTemp">
          {weatherInfo.forecast &&
            Math.floor(weatherInfo.forecast.forecastday[0].day.mintemp_c)}
          °C
        </span>
      </div>
      <div id="dayOne" className="day" onClick={clickHandler}>
        <div className="day-name">
          {weatherInfo.forecast &&
            dayjs(`${weatherInfo.forecast.forecastday[1].date}`).format("dddd")}
        </div>
        <img
          alt="codition-icon"
          className="condition-icon"
          src={
            weatherInfo.forecast &&
            weatherInfo.forecast.forecastday[1].day.condition.icon
          }
        ></img>

        <span class="highTemp">
          {weatherInfo.forecast &&
            Math.floor(weatherInfo.forecast.forecastday[1].day.maxtemp_c)}
          °C
        </span>
        <span class="lowTemp">
          {weatherInfo.forecast &&
            Math.floor(weatherInfo.forecast.forecastday[1].day.mintemp_c)}
          °C
        </span>
      </div>
      <div id="dayTwo" className="day" onClick={clickHandler}>
        <div className="day-name">
          {weatherInfo.forecast &&
            dayjs(`${weatherInfo.forecast.forecastday[2].date}`).format("dddd")}
        </div>
        <img
          alt="codition-icon"
          className="condition-icon"
          src={
            weatherInfo.forecast &&
            weatherInfo.forecast.forecastday[2].day.condition.icon
          }
        ></img>
        <span class="highTemp">
          {weatherInfo.forecast &&
            Math.floor(weatherInfo.forecast.forecastday[2].day.maxtemp_c)}
          °C
        </span>
        <span class="lowTemp">
          {weatherInfo.forecast &&
            Math.floor(weatherInfo.forecast.forecastday[2].day.mintemp_c)}
          °C
        </span>
      </div>
    </div>
  );
}
export default Forecast;
