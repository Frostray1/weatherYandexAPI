import { changeIconWeather } from "./changeIconWeatherScript.js";
import { weatherStatusTranslation } from "./changeConditionScript.js";
import { changeBackground } from "./changeBackgroundScript.js";
import { weatherForecast, changeDateForecasts } from "./weatherForecastScript.js";

let temperatureDegree = document.querySelector(".temperature__number");
let location = document.querySelector(".location__sity");
let feels = document.querySelector(".feels_like");
var search_button = document.querySelector(".search__img");

search_button.addEventListener("click", function () {
  let search_text = document.querySelector(".search__input");
  console.log(search_text.value);
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const geoApi = `${proxy}https://nominatim.openstreetmap.org/search?city=${search_text.value}&format=jsonv2`;
  fetch(geoApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { lat, lon } = data[0];
      const api = `${proxy}https://api.weather.yandex.ru/v1/forecast?lat=${lat}&lon=${lon}&lang=ru_RU`;
      fetch(api, {
        headers: {
          "X-Yandex-API-Key": "23f9a2c5-b711-4261-8cad-c08c5c2b6c9c",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp, condition, icon, feels_like } = data.fact;
          const { name } = data.geo_object.locality;

          let weatherСondition = weatherStatusTranslation(condition);
          changeBackground(weatherСondition);
          changeIconWeather(icon);
          temp <= 0 ? temperatureDegree.textContent = temp : temperatureDegree.textContent = '+'+ temp ;
          feels_like <= 0 ? feels.textContent = `Ощущается как: ${feels_like}°` : feels.textContent = `Ощущается как: +${feels_like}°`;
          location.textContent = name;
          const { forecasts } = data;
          weatherForecast(forecasts);
          changeDateForecasts(forecasts);
        });
    });
});
