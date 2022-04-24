const clock = document.querySelector("h2#clock");

function getClock(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    clock.innerText = `${year}년 ${month+1}월 ${date}일 ${hours}:${minutes}:${seconds}`
}

setInterval(getClock,1000)