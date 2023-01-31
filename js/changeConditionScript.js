
const status_code = {
  "0":"ясно",
  "1":"Преимущественно ясно",
  "2":"малооблачно",
  "3":"пасмурно",
  "45":"туман",
  "48":"Туман с инеем",
  "51":"морось",
  "53":"морось",
  "55":"морось",
  "56":"Моросящий дождь",
  "57":"Моросящий дождь",
  "61":"небольшой дождь", 
  "63":"дождь" ,
  "65":"сильный дождь",
  "66":"Ледяной дождь",
  "67":"Ледяной дождь",
  "71":"небольшой снег",
  "73":"снег ",
  "75":"снегопад",
  "77":"пурга",
  "80":" ливень",
  "81":"ливень",
  "82":"ливень",
  "85":" небольшой снег",
  "86":"сильный снегопад",
  "95":"гроза",
  "96":"гроза с небольшим градом ",
  "99":"гроза с сильным градом",

}



export function weatherStatusTranslation(weathercode) {
    document.getElementById("condition").textContent = status_code[weathercode];
    return status_code[weathercode]
}


// export function weatherStatusTranslationForecast(condition) {
//   let conditionArr = condition.split ('-and-');
//   if (conditionArr[0]!= null && conditionArr[1]!= null ){
//    return status[conditionArr[1]];
//   }else{
//    return status[conditionArr[0]];
//   }
// }