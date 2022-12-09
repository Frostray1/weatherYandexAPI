export function changeBackground(condition) {
  const status = {
    cloudy: "/img/video/RooftopClouds.mp4",
    overcast: "/img/video/RooftopClouds.mp4",
    "overcast-and-light-snow": "/img/video/ligt-snow-day.mp4",
  };
  const color = {
    cloudy: "rgb(101,116,127, 0.5)",
    overcast: "rgb(101,116,127, 0.5)",
    "overcast-and-light-snow": "rgb(101,116,127, 0.5)",
  };
  document.getElementById("weather").style.backgroundColor = color[condition];
  document.getElementById("bgVideo__media").src = `${status[condition]}`;
}
