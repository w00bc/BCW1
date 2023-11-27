/*
    2023.11.22 소멘텀 메인에 뜨는 시계
*/

//시간 <h2 id="clock">00:00:00</h2>
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerText = `${String(hour).padStart(2,"0")} : ${String(minute).padStart(2,"0")} : ${String(second).padStart(2,"0")}`;

}
getClock();
setInterval(getClock, 1000);