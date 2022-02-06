const dayItem = document.getElementById("days");
const hoursItem = document.getElementById("hours"); 
const minutesItem = document.getElementById("minutes"); 
const secondsItem = document.getElementById("seconds"); 


const seanBday = "23 Apr 2022";

function countdown() {
  const yourBday = new Date(seanBday);
  const today = new Date();

  const totalSeconds = (yourBday - today) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;

  const mins = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds) % 60;

  dayItem.innerHTML = days;
  hoursItem.innerHTML = formatTime(hours);
  minutesItem.innerHTML = formatTime(mins);
  secondsItem.innerHTML = formatTime(seconds);
  console.log(totalSeconds);
}


function formatTime(time) {
//if we have less than ten seconds remaining we show a zero in front of the digit, otherwise we return the actual time
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);