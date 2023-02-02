import { weatherStatusTranslation } from "./changeConditionScript.js";
import {changeIconWeatherForecast } from "./changeIconWeatherScript.js";
// import {weatherStatusTranslationForecast } from "./changeConditionScript.js";

export function weatherForecast(daily){
    console.log("123123123",daily)
    let weatherForecast__temp = document.querySelectorAll('.weatherForecast__temp');
          let weatherForecast__icon = document.querySelectorAll('.weatherForecast__icon')
          let weatherForecast__condition = document.querySelectorAll('.weatherForecast__condition');
          daily.weathercode.forEach(function(item, index) {
            weatherForecast__temp[index].textContent = Math.round((daily.temperature_2m_max[index]+daily.temperature_2m_min[index])/2);
            weatherForecast__icon[index].src = changeIconWeatherForecast(weatherStatusTranslation(item));
            weatherForecast__condition[index].textContent = weatherStatusTranslation(item);
            
          });
}


export function changeDateForecasts(forecasts){
  
    const mounthRu = {
        "01":"января",
        "02":"февраля",
        "03":"марта",
        "04":"апреля",
        "05":"мая",
        "06":"июня",
        "07":"июля",
        "08":"августа",
        "09":"сентября",
        "10":"октября",
        "11":"ноября",
        "12":"декабря"
    }
    const mounthEn = {
        "01":"January",
        "02":"February",
        "03":"March",
        "04":"April",
        "05":"May",
        "06":"June",
        "07":"July",
        "08":"August",
        "09":"September",
        "10":"October",
        "11":"November",
        "12":"December"
    }
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];

//const d = new Date("July 21, 1983 01:15:00");
    let dateForecasts = document.querySelectorAll('.date');
    forecasts.forEach(function(item, index) {
        let dateArr =  item.split('-');
        dateForecasts[index].textContent = dateArr[2] + " " + mounthRu[dateArr[1]];
    })
  //2022-12-11

    //[2022] [12] [11]

   
    let dayOfTheWeek = document.querySelectorAll('.dayOfTheWeek');
    forecasts.forEach(function(item, index) {
        let dateArr =  item.split('-');
        let changeDate = new Date(`${mounthEn[dateArr[1]]} ${dateArr[2]}, ${dateArr[0]} 12:00:00`);
        var newChangedDate = changeDate.getDay();
        dayOfTheWeek[index].textContent = days[newChangedDate];
        
        // let a = n.getDay()
        // dayOfTheWeek[index].textContent = days[a];
    })

}