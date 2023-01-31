import { changeIconWeather} from "./changeIconWeatherScript.js";
import { weatherStatusTranslation} from "./changeConditionScript.js";
import { changeBackground } from "./changeBackgroundScript.js";
import { weatherForecast, changeDateForecasts } from "./weatherForecastScript.js";
import { loadInformation } from "./leftBlockInformationSrcipt.js";
function getTime(timeDescription) {
  let dateAndTime = new Date().toLocaleString();
  let timeDesktop = dateAndTime.split(",");
  let timeDesktopHoursMinutes = timeDesktop[1].split(":");
  timeDescription.textContent =
    timeDesktopHoursMinutes[0] + ":" + timeDesktopHoursMinutes[1];
}





window.addEventListener("load", () => {
  let longitude; // долгота
  let latitude; // широта
  let timeDescription = document.querySelector(".time");
  let temperatureDegree = document.querySelector(".temperature__number");
  let location = document.querySelector(".location__sity");
  let feels = document.querySelector(".feels_like");
  getTime(timeDescription);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((positions) => {
      console.log(positions);
      longitude = positions.coords.longitude;
      latitude = positions.coords.latitude;
      const city = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      const api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,pressure_msl,apparent_temperature`;
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
          temperature <= 0 ? (temperatureDegree.textContent = `${Math.round(temperature)}°`) : (temperatureDegree.textContent = "+" + `${Math.round(temperature)}°`);
          // feels_like <= 0 ? (feels.textContent = `Ощущается как: ${feels_like}°`) : (feels.textContent = `Ощущается как: +${feels_like}°`);
          changeBackground(condition);

          // const { forecasts } = data;
          // weatherForecast(forecasts);
          // changeDateForecasts(forecasts);

          loadInformation(windspeed, pressure_msl[0], relativehumidity_2m[0]);

          
          
        });
    });
  } else {
    alert("Включите геопозицию");
  }
});
