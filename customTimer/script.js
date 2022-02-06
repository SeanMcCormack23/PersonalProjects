const dayNumber = document.getElementById("days");
const hoursNumber = document.getElementById("hours");
const minutesNumber = document.getElementById("minutes");
const secondsNumber = document.getElementById("seconds");
const heading = document.getElementById("heading");

const ourDate = document.getElementById("theDate");

ourDate.addEventListener("change", function () {
  var input = "";
  input = this.value;
  var dateEntered = new Date(input);
  console.log(input); //e.g. 2015-11-13
  console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

  // console.log(ourDate.value);
  function countdown() {
    
    const today = new Date();

    const totalSeconds = (dateEntered - today) / 1000;

    // console.log(totalSeconds);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayNumber.innerHTML = days;
    hoursNumber.innerHTML = formatTime(hours);
    minutesNumber.innerHTML = formatTime(mins);
    secondsNumber.innerText = formatTime(seconds);

  }
//here i set the countdown timer to run for 10 iterations at 1000ms gap between each, and then the date can be edited
var x = 0;
const countInterval = setInterval(function() {
  countdown();
  if (++x == 10){
    window.clearInterval(countInterval);
  }
}, 1000);
});



//ternary operation to append a 0 before the result if less than 10 
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

const form = document.getElementById("userInfo");

//add an event listener listening for SUBMIT to prevent the form data clearing on submit 

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log(fname.value + " " +lname.value + " " + reason.value);

  extraInfo();
  theOccasion();
});

function extraInfo() {
  const name = fname.value + " " + lname.value;
  const reasoning = reason.value;

  function personalise() {
    heading.innerHTML = "It is " + name + "'s " + reasoning + " in...";
  }
  personalise();
};

//this is how the background image is decided, based on the occasion the user has input
function theOccasion() {
  if (reason.value == "birthday") {
    document.body.style.backgroundImage = "url('bday.jpg')";
  } else if (reason.value == "anniversary") {
    document.body.style.backgroundImage = "url('anniversary.jpg')";
  } else if (reason.value == "new year") {
    document.body.style.backgroundImage = "url('newyear.jpg')";
  } else if (reason.value == "holiday") {
    document.body.style.backgroundImage = "url('holiday.jpg')";
  } else if (reason.value == "operation"){
    document.body.style.backgroundImage = "url('op.jpg')";
  } else if (reason.value == "deadline") {
    document.body.style.backgroundImage = "url('deadline.jpg')";
  }
};




