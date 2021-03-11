import "./Forecast.scss";
import dayjs from "dayjs";

function Forecast({ weatherInfo }) {
  return (
    <div className="forecast">
      <div class="day ">
        <div className="day-name">Today</div>
        <img
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
      <div className="day">
        <div className="day-name">
          {weatherInfo.forecast &&
            dayjs(`${weatherInfo.forecast.forecastday[1].date}`).format("dddd")}
        </div>
        <img
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
      <div className="day">
        <div className="day-name">
          {weatherInfo.forecast &&
            dayjs(`${weatherInfo.forecast.forecastday[2].date}`).format("dddd")}
        </div>
        <img
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
