import dayjs from "dayjs";
import "./TestsC.scss";

function TestsC({ weatherInfo }) {
  const today = new Date();
  console.log({ weatherInfo });
  return (
    <div className="testing">
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
  );
}
export default TestsC;
