import React from "react";

import * as $ from "jquery";
import "./Card.scss";

function Card({ weatherInfo }) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log({ weatherInfo });
  return (
    <>
      <div class="card">
        <span class="city">
          {weatherInfo.location && weatherInfo.location.name}
        </span>
        <ul class="menu">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <br />
        <div class="condition-today">
          <img
            src={weatherInfo.current && weatherInfo.current.condition.icon}
          ></img>
        </div>
        <span class="temp">
          {weatherInfo.current && weatherInfo.current.temp_c}&#176;
        </span>
        <span>
          <ul class="variations">
            <li>{weatherInfo.current && weatherInfo.current.condition.text}</li>
            <li>
              <span class="speed">
                {weatherInfo.current && weatherInfo.current.wind_kph}
                <span class="kph">k/h</span>
              </span>
            </li>
          </ul>
        </span>
        <div class="forecast clear">
          <div class="day zero">
            {weatherInfo.forecast &&
              weekdays[
                new Date(`${weatherInfo.forecast.forecastday[0].date}`).getDay()
              ]}
            <br />
            <img
              src={
                weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[0].day.condition.icon
              }
            ></img>
            <br />{" "}
            <span class="highTemp">
              {weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[0].day.maxtemp_c}
              &#176;
            </span>{" "}
            <br />
            <span class="lowTemp">
              {weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[0].day.mintemp_c}
              &#176;
            </span>
          </div>
          <div class="day one">
            {weatherInfo.forecast &&
              weekdays[
                new Date(`${weatherInfo.forecast.forecastday[1].date}`).getDay()
              ]}
            <img
              src={
                weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[1].day.condition.icon
              }
            ></img>
            <br />{" "}
            <span class="highTemp">
              {weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[1].day.maxtemp_c}
              &#176;
            </span>{" "}
            <br />
            <span class="lowTemp">
              {weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[1].day.mintemp_c}
              &#176;
            </span>
          </div>
          <div class="day two">
            {weatherInfo.forecast &&
              weekdays[
                new Date(`${weatherInfo.forecast.forecastday[2].date}`).getDay()
              ]}
            <br />
            <img
              src={
                weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[2].day.condition.icon
              }
            ></img>
            <br />{" "}
            <span class="highTemp">
              {weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[2].day.maxtemp_c}
              &#176;
            </span>{" "}
            <br />
            <span class="lowTemp">
              {weatherInfo.forecast &&
                weatherInfo.forecast.forecastday[2].day.mintemp_c}
              &#176;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
