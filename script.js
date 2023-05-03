let day = document.querySelector(".day");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let apiKey = "9b661709fa6c303edd0e9239d489303f";
let baseUrl = "https://api.openweathermap.org/data/2.5/";

btn.addEventListener("click", function () {
  console.log("hello");
  console.log(input.value);
  getCoords(input.value);
});

function getWeather(latitude, longitude) {
  let getDay =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    apiKey +
    "&units=imperial";

  fetch(getDay)
    .then(function (response) {
      // console.log(response)
    return response.json();
    })
    .then(function (results) {
    console.log("This is current weather: ", results);

    // console.log(results.main.temp);
    temp.textContent = results.main.temp + " F";

    // console.log(results.main.humidity);
    humidity.textContent = results.main.humidity + " %";

    // console.log(results.wind.speed);
    wind.textContent = results.wind.speed + " MPH";

    // console.log(results.name);
    city.textContent = results.name;

    let date = results.dt;
    let newDate = new Date(date * 1000);
    console.log(newDate);
    String(newDate);
    day.textContent = newDate; 

    });
}

function fiveDay(latitude, longitude) {
  //   console.log(lattidue);
  //   console.log(longitude);
  let fiveDay =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    apiKey +
    "&units=imperial";

  fetch(fiveDay)
    .then(function (response) {
      // console.log(response)
      return response.json();
    })
    .then(function (results) {
      console.log("This is five day forecast :", results);

    console.log(results.list[3].main.temp)
    // temp.textContent = results.list[3].main.temp + " F";

    });


}

function getCoords(cityName) {
  console.log(cityName);

  let geoCode =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=1&appid=" +
    apiKey;

  fetch(geoCode)
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      console.log(results);
      //   console.log(results[0].lat);
      //   console.log(results[0].lon);
      getWeather(results[0].lat, results[0].lon);
      fiveDay(results[0].lat, results[0].lon);
    });
}

getCoords("Atlanta");
