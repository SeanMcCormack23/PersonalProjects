var form = document.querySelector("#cityData");
var input = document.querySelector("#cityName");
const apiKey = "130f7dd2f147634f3b235ed8809ff126";

const msg = document.querySelector(".msg");
const list = document.querySelector(".api_call_results .cities");




form.addEventListener("submit", (e) => {
    e.preventDefault(); //stops the page reloading
    const listItems = list.querySelectorAll(".api_call_results .cities");

    fetch("http://api.openweathermap.org/data/2.5/weather?q="+input.value+"&APPID="+apiKey+"&units=metric")

    .then(res => res.json())
    
    .then(data => {
        const { main, name, sys, weather } = data;


        const li = document.createElement("li");
        li.classList.add("city");

        const markup = 
        `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>

        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <div class="current-weather">${weather[0].description}
        `;

        li.innerHTML = markup;
        list.appendChild(li);

        console.log(data);
    })
    .catch(() => {
        msg.textContent = "Valid cities only.";
    });
        msg.textContent = "";
        form.reset();
        input.focus();
});


function updateTimeAndDate() {
    var today = new Date();
    var date = today.getDate()+ " - " + (today.getMonth() + 1) + " - " + today.getFullYear();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("date").innerHTML += date;
    document.getElementById("time").innerHTML += time;

}
updateTimeAndDate();


