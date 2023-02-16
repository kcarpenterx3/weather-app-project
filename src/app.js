function displayTemperature(response) {
  let temperatureElement = document.querySelector(".temperature");
  let cityElement = document.querySelector("#city");
  let weatherDescriptionElement = document.querySelector(
    "#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherDescriptionElement = response.data.weather[0].description;
  humidityElement.innerHTML= response.data.main.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);


}

let apiKey = "72367c58a6b678830274a8ecc81b81e8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
fort lauderdale&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
