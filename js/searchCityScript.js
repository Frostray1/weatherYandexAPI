import { changeIconWeather } from "./changeIconWeatherScript.js";
import { weatherStatusTranslation } from "./changeConditionScript.js";
import { changeBackground } from "./changeBackgroundScript.js";
import { weatherForecast, changeDateForecasts } from "./weatherForecastScript.js";
import { loadInformation } from "./leftBlockInformationSrcipt.js";

let temperatureDegree = document.querySelector(".temperature__number");
let location = document.querySelector(".location__sity");
let feels = document.querySelector(".feels_like");
var search_button = document.querySelector(".search__img");

search_button.addEventListener("click", function () {
  let search_text = document.querySelector(".search__input");
  console.log(search_text.value);
  // const proxy = "https://cors-anywhere.herokuapp.com/";
  const geoApi = `https://nominatim.openstreetmap.org/search?city=${search_text.value}&format=jsonv2`;
  fetch(geoApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      const { lat, lon } = data[0];
      const city = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
      fetch(city, {
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          
          const {city } = data.address;
          console.log('Город - ',city);
          location.textContent = city;
        });
      const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m,pressure_msl,apparent_temperature`;
      fetch(api, {

      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('',data);
          const {weathercode, temperature, windspeed } = data.current_weather;
          const {relativehumidity_2m,pressure_msl,apparent_temperature}=data.hourly;
          console.log("Владность - ",relativehumidity_2m[0])
          let condition = weatherStatusTranslation(weathercode);
          changeIconWeather(condition);
          temperature <= 0 ? (temperatureDegree.textContent = `-${Math.round(temperature)}°`) : (temperatureDegree.textContent = "+" + `${Math.round(temperature)}°`);
          // feels_like <= 0 ? (feels.textContent = `Ощущается как: ${feels_like}°`) : (feels.textContent = `Ощущается как: +${feels_like}°`);
          changeBackground(condition);

          // const { forecasts } = data;
          // weatherForecast(forecasts);
          // changeDateForecasts(forecasts);

          loadInformation(windspeed, pressure_msl[0], relativehumidity_2m[0]);

        });
    });
});
