const API_KEY = "09342ac8a90e111fe9bc6a24f62b1993"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`
    fetch(url).then(r => r.json()).then(data =>{
        const weather = document.querySelector("#weather span:last-child")
        const city = document.querySelector("#weather span:first-child")
        city.innerText = `${data.name},`
        weather.innerText = data.weather[0].description
    })
}

function onGeoError(){
    alert("Cant' find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)