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
  getTime(timeDescription);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((positions) => {
      console.log(positions);
      longitude = positions.coords.longitude;
      latitude = positions.coords.latitude;
      const city = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      const api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,pressure_msl,apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;
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
          const {time} = data.daily;
          let condition = weatherStatusTranslation(weathercode);
          document.getElementById("condition").textContent = condition;
          changeIconWeather(condition);
          
          changeBackground(condition);
          temperatureDegree.textContent = `${Math.round(temperature)}°`
        
          weatherForecast(data.daily);

          changeDateForecasts(time)

          loadInformation(windspeed, pressure_msl[0], relativehumidity_2m[0]);

          
          
        });
    });
  } else {
    alert("Включите геопозицию");
  }
});
