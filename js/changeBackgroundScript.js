export function changeBackground(weatherСondition) {
  const status = {
    "ясно":"/img/video/clearWeather.mp4",
    "Преимущественно ясно":"/img/video/clearWeather.mp4",
    "малооблачно":"/img/video/clearWeather.mp4",
    "пасмурно": "/img/video/RooftopClouds.mp4",
    "туман":"/img/video/fog.mp4",
    "Туман с инеем":"/img/video/fog.mp4",
    "морось":"/img/video/rain.mp4",
    "Моросящий дождь":"/img/video/rain.mp4",
    "небольшой дождь":"/img/video/rain.mp4",
    "дождь" :"/img/video/rain2.mp4",
    "сильный дождь":"/img/video/rain2.mp4",
    "Ледяной дождь":"/img/video/rain2.mp4",
    "небольшой снег": "/img/video/ligt-snow-day.mp4",
    "снег ":"/img/video/snow.mp4",
    "снегопад":"/img/video/snow.mp4",
    "пурга":"/img/video/snow.mp4",
    "ливень":"/img/video/rain2.mp4",
    "сильный снегопад":"/img/video/snow.mp4",
    "гроза":"/img/video/thunderstorm.mp4",
    "гроза с небольшим градом ":"/img/video/thunderstorm.mp4",
    "гроза с сильным градом":"/img/video/thunderstorm.mp4",
   
  };
  const color = {
    "пасмурно": "rgb(101,116,127, 0.5)",
    "малооблачно": "rgb(101,116,127, 0.5)",
    "небольшой снег": "rgb(101,116,127, 0.5)",
  };

  const backgroundAllBlocks = document.querySelectorAll("#weather , #leftBlockWeather , #downBlockWeather");
  console.log(backgroundAllBlocks)
  backgroundAllBlocks.forEach(blocks => {
    blocks.style.backgroundColor = color[weatherСondition];
   });

  document.getElementById("bgVideo__media").src = `${status[weatherСondition]}`;
}
