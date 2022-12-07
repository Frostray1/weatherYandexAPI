export function changeBackground (condition){
  
    const status = {
        "overcast": "/img/weather/RooftopClouds.mp4"
      }
    const color = {
      "overcast": 'rgb(101,116,127, 0.5)'
    }
    
      document.getElementById('weather').style.backgroundColor = color[condition]
      return document.getElementById('bgVideo__media').src = `${status[condition]}`
}