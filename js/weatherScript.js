import {changeIconWeather} from './changeIconWeatherScript.js'
import {weatherStatusTranslation} from './changeConditionScript.js'
import {changeBackground} from './changeBackgroundScript.js'

function getTime(timeDescription) {
  let dateAndTime = new Date().toLocaleString();
  let timeDesktop = dateAndTime.split(",");
  let timeDesktopHoursMinutes = timeDesktop[1].split(":");
  timeDescription.textContent =
    timeDesktopHoursMinutes[0] + ":" + timeDesktopHoursMinutes[1];
}


window.onload = function() {
  const preload = document.querySelector('.preloader-5');
  const preload__text = document.querySelector('.preloader__text');
  const preload_window = document.querySelector('.preloader__window');
  setTimeout( function() {
    preload__text.textContent = 'Настраиваемся на хорошую погоду'
  },1000)
  setTimeout( function() {
    preload__text.textContent = 'Разгоняем тучи...'
  },2000)
  setTimeout( function() {
    preload__text.textContent = 'Приготовились!'
  },3000)
  setTimeout( function() {
    preload.classList.add("preloader-remove");
    preload_window.classList.add("preloader-remove");
}, 4000 );
   
};


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
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.weather.yandex.ru/v1/forecast?lat=${latitude}&lon=${longitude}&lang=ru_RU`;
      fetch(api, {
        headers: {
          "X-Yandex-API-Key": "23f9a2c5-b711-4261-8cad-c08c5c2b6c9c",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp, condition, icon, feels_like } = data.fact;
          const { name } = data.geo_object.locality;
          changeBackground(condition)
          changeIconWeather(icon);
          weatherStatusTranslation(condition);
          
          feels.textContent = `Ощущается как: ${feels_like}°`
          temperatureDegree.textContent = temp;
          location.textContent = name;
        
        });
    });
  } else {
    alert("Включи геопозицию");
  }
 });
