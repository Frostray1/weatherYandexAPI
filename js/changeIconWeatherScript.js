const iconFormat = {
  "ясно":"/icons/animated/skc_d.svg",
  "Преимущественно ясно":"/icons/animated/cloudy-day-3.svg",
  "малооблачно":"/icons/animated/ovc.svg",
  "пасмурно":"/icons/animated/ovc.svg",
  "туман":"/icons/animated/ovc.svg",
  "Туман с инеем":"/icons/animated/ovc.svg",
  "морось":"/icons/animated/ovc_-ra.svg",
  "морось":"/icons/animated/ovc_-ra.svg",
  "морось":"/icons/animated/ovc_-ra.svg",
  "Моросящий дождь":"/icons/animated/rainy-5.svg",
  "Моросящий дождь":"/icons/animated/rainy-5.svg",
  "небольшой дождь":"/icons/animated/rainy-5.svg",
  "дождь" :"/icons/animated/rainy-5.svg",
  "сильный дождь":"/icons/animated/rainy-7.svg",
  "Ледяной дождь":"/icons/animated/rainy-7.svg",
  "Ледяной дождь":"/icons/animated/rainy-7.svg",
  "небольшой снег":"/icons/animated/snowy-2.svg",
  "снег ":"/icons/animated/snowy-2.svg",
  "снегопад":"/icons/animated/snowy-6.svg",
  "пурга":"/icons/animated/snowy-6.svg",
  "ливень":"/icons/animated/rainy-7.svg",
  "ливень":"/icons/animated/rainy-7.svg",
  "ливень":"/icons/animated/rainy-7.svg",
  "небольшой снег":"/icons/animated/snowy-2.svg",
  "сильный снегопад":"/icons/animated/snowy-6.svg",
  "гроза":"/icons/animated/ovc_ts_ra.svg",
  "гроза с небольшим градом ":"/icons/animated/ovc_ts_ra.svg",
  "гроза с сильным градом":"/icons/animated/ovc_ts_ra.svg",

}
export function changeIconWeather(condition){
  document.getElementById('weatherIcons').src = iconFormat[condition];
  return iconFormat[condition]
}
export function changeIconWeatherForecast(condition){
  return iconFormat[condition]

}