let day = document.querySelector(".day");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let day1 = document.querySelector("#day1");
let day2 = document.querySelector("#day2");
let day3 = document.querySelector("#day3");
let day4 = document.querySelector("#day4");
let day5 = document.querySelector("#day5");
let temp1 = document.querySelector("#temp1");
let temp2 = document.querySelector("#temp2");
let temp3 = document.querySelector("#temp3");
let temp4 = document.querySelector("#temp4");
let temp5 = document.querySelector("#temp5");
let wind1 = document.querySelector("#wind1");
let wind2 = document.querySelector("#wind2");
let wind3 = document.querySelector("#wind3");
let wind4 = document.querySelector("#wind4");
let wind5 = document.querySelector("#wind5");
let humidity1 = document.querySelector("#humidity1");
let humidity2 = document.querySelector("#humidity2");
let humidity3 = document.querySelector("#humidity3");
let humidity4 = document.querySelector("#humidity4");
let humidity5 = document.querySelector("#humidity5");
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
    // console.log(newDate);
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

    // console.log(results.list[3].main.temp)
    temp1.textContent = results.list[3].main.temp + " F";
    temp2.textContent = results.list[11].main.temp + " F";
    temp3.textContent = results.list[19].main.temp + " F";
    temp4.textContent = results.list[27].main.temp + " F";
    temp5.textContent = results.list[35].main.temp + " F";

    // console.log(results.list[3].wind.speed)
    wind1.textContent = results.list[3].wind.speed + " MPH";
    wind2.textContent = results.list[11].wind.speed + " MPH";
    wind3.textContent = results.list[19].wind.speed + " MPH";
    wind4.textContent = results.list[27].wind.speed + " MPH";
    wind5.textContent = results.list[35].wind.speed + " MPH";

    // console.log(results.list[3].main.humidity)
    humidity1.textContent = results.list[3].main.humidity + " %";
    humidity2.textContent = results.list[11].main.humidity + " %";
    humidity3.textContent = results.list[19].main.humidity + " %";
    humidity4.textContent = results.list[27].main.humidity + " %";
    humidity5.textContent = results.list[35].main.humidity + " %";

    let date1 = results.list[3].dt;
    console.log(date1);
    let newDate1 = new Date(date1 * 1000);
    console.log(newDate1);
    date1.textContent = newDate1;

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

getCoords("Detroit");
