export function weatherStatusTranslation (condition){
    const status = {
        "clear":"ясно",
        "partly-cloudy":"малооблачно",
        "cloudy":"облачно с прояснениями",
        "overcast": "пасмурно",
        "drizzle": "морось",
        "light-rain":"небольшой дождь",
        "rain":"дождь",
        "moderate-rain":"умеренно сильный дождь",
        "heavy-rain":"сильный дождь",
        "continuous-heavy-rain":"длительный сильный дождь",
        "showers":"ливень",
        "wet-snow":"дождь со снегом.",
        "light-snow":"небольшой снег",
        "overcast-and-light-snow":"Облачно и небольшой снег",
        "snow":"снег",
        "snow-showers":"снегопад",
        "hail":"град",
        "thunderstorm":"гроза",
        "thunderstorm-with-rain":"дождь с грозой",
        "thunderstorm-with-hail":"гроза с градом"
      }

      return document.getElementById('condition').textContent = status[condition];
}