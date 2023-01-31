
export function loadInformation(wind_speed, pressure_mm, humidity){
    let wind__speedText = document.querySelector(".wind__speedText");
    let pressure_mmText = document.querySelector(".pressure_mmText");
    let humidityText = document.querySelector(".humidityText");

    wind__speedText.textContent = `Скорость ветра ${wind_speed} м/с`;
    pressure_mmText.textContent = `Давление ${Math.round(pressure_mm*0.75)} мм рт. ст`;
    humidityText.textContent = `Влажность воздуха ${humidity}%`;
}