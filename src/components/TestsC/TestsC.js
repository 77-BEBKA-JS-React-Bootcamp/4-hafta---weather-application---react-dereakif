import dayjs from "dayjs";

function TestsC({ weatherInfo }) {
  const today = new Date();
  console.log({ weatherInfo });
  console.log();
  return (
    <div className="testing">
      <p>TestsC</p>
      <div className="date-today">{dayjs().format("ddd D/M/YYYY")}</div>
      {weatherInfo.location && weatherInfo.location.name}
      <div className="temp-today">
        {weatherInfo.current && Math.round(weatherInfo.current.temp_c)}°C
      </div>
      <div className="condition-today">
        {weatherInfo.current && weatherInfo.current.condition.text}
      </div>
      <div className="max-today">
        {weatherInfo.forecast &&
          Math.round(weatherInfo.forecast.forecastday[0].day.maxtemp_c)}
        °C
      </div>
      <div className="min-today">
        {weatherInfo.forecast &&
          Math.round(weatherInfo.forecast.forecastday[0].day.mintemp_c)}
        °C
      </div>
      <img
        src={weatherInfo.current && weatherInfo.current.condition.icon}
      ></img>
    </div>
  );
}
export default TestsC;
