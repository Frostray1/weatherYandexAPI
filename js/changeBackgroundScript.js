export function changeBackground(weatherСondition) {
  const status = {
    "cloudy": "/img/video/RooftopClouds.mp4",
    "overcast": "/img/video/RooftopClouds.mp4",
    "light-snow": "/img/video/ligt-snow-day.mp4",
  };
  const color = {
    "cloudy": "rgb(101,116,127, 0.5)",
    "overcast": "rgb(101,116,127, 0.5)",
    "ight-snow": "rgb(101,116,127, 0.5)",
  };

  const backgroundAllBlocks = document.querySelectorAll("#weather , #leftBlockWeather , #downBlockWeather");
  console.log(backgroundAllBlocks)
  backgroundAllBlocks.forEach(blocks => {
    blocks.style.backgroundColor = color[weatherСondition];
   });

  document.getElementById("bgVideo__media").src = `${status[weatherСondition]}`;
}
