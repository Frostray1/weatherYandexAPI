export function changeBackground(weatherСondition) {
  const status = {
    "пасмурно": "/img/video/RooftopClouds.mp4",
    "малооблачно": "/img/video/RooftopClouds.mp4",
    "overcast": "/img/video/RooftopClouds.mp4",
    "небольшой снег": "/img/video/ligt-snow-day.mp4",
  };
  const color = {
    "cloudy": "rgb(101,116,127, 0.5)",
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
