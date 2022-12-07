export function changeBackground (condition){
    const status = {
       
        "overcast": "url('../../img/weather/As-Above-So-Below-2560x1600.jpg')"
        // "overcast": "url('../../img/weather/RooftopClouds.mp4')"
      }
    const color = {
      "overcast": '#65747f'
    }
      document.getElementById('weather').style.backgroundColor = color[condition]
      return document.body.style.background = `${status[condition]}`;
}