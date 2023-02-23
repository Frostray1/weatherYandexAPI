import { changeIconWeather } from "./changeIconWeatherScript.js";
import { weatherStatusTranslation } from "./changeConditionScript.js";
import { changeBackground } from "./changeBackgroundScript.js";
import {
  weatherForecast,
  changeDateForecasts,
} from "./weatherForecastScript.js";
import { loadInformation } from "./leftBlockInformationSrcipt.js";

let temperatureDegree = document.querySelector(".temperature__number");
let locationCity = document.querySelector(".location__sity");

var search_button = document.querySelector(".search__img");
let search_text = document.querySelector(".search__input");
search_text.addEventListener("click", function () {
  search_text.value = "";
});
search_text.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    var myList = document.getElementById('list');
    myList.innerHTML = '';
    document.getElementById("search__block").style.display = "none";
    document.getElementById("selectCity").style.display = "block";
    document.getElementById("weatherForecast").style.display = "none";
    

    const geoApi = `https://nominatim.openstreetmap.org/search?city=${search_text.value}&format=jsonv2`;
    fetch(geoApi)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { lat, lon } = data[0];
        const { display_name } = data[0];
        let dataLength


        data.length > 4 ? dataLength = 4 : dataLength = data.length;
        console.log(dataLength);

        const $list = document.querySelector("#list");
        let $fragment = new DocumentFragment();
        for (let i = 0; i < dataLength; i++) {
          let { display_name } = data[i];
          const $li = document.createElement("li");
          $li.textContent = display_name;
          $li.id = i;
          $li.className = "searchLiValue";
          $li.addEventListener('click', () => {
            searchCity($li.id);
          })
          $fragment.appendChild($li);
        }
      
        document.querySelector("#list").append($fragment);

      });
      // document.getElementById('bgVideo').setAttribute("style", "height:200vh");
  }
});



search_button.addEventListener("click", function () {
  // searchCity();
});

function searchCity(id) {

  document.getElementById("search__block").style.display = "block";
  document.getElementById("selectCity").style.display = "none";
  document.getElementById("weatherForecast").style.display = "inline-block";
  var myList = document.getElementById('list');
  myList.innerHTML = '';


  const geoApi = `https://nominatim.openstreetmap.org/search?city=${search_text.value}&format=jsonv2`;
  fetch(geoApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { lat, lon } = data[id];
      const { display_name } = data[id];

      locationCity.textContent = display_name.split(",")[0];
     
      const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m,pressure_msl,apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;
      fetch(api, {})
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log("", data);
          const { weathercode, temperature, windspeed } = data.current_weather;
          const { relativehumidity_2m, pressure_msl, apparent_temperature } =
            data.hourly;
        
          let condition = weatherStatusTranslation(weathercode);
          console.log("код ",condition, " code- ",weathercode )
          document.getElementById("condition").textContent = condition;
          changeIconWeather(condition);
          temperatureDegree.textContent = `${Math.round(temperature)}°`
          changeBackground(condition);
          weatherForecast(data.daily);

          loadInformation(windspeed, pressure_msl[0], relativehumidity_2m[0]);
        });
    });
}
