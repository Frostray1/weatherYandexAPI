export function changeBackground (condition){
    const status = {
        "overcast": "/img/weather/RooftopClouds.mp4"
      }
    const color = {
      "overcast": '#65747f'
    }
      document.getElementById('weather').style.backgroundColor = color[condition]
      return document.getElementById('bgVideo__media').src = `${status[condition]}`
}