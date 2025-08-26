function displayTemperature(response) {
  let temperatureElement = document.querySelector("#weather-temperature");
  let weatherCityName = document.querySelector("#weather-city-name");
  let temperature = Math.round(response.data.temperature.current);
  let description = document.querySelector("#description");

  weatherCityName.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  description.innerHTML = response.data.condition.description;
}

function displayCity(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-element");

  let city = inputElement.value;

  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiKeyUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiKeyUrl).then(displayTemperature);
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

  let formatDate = days[day];

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentElement = document.querySelector("#current-weather-time");
  currentElement.innerHTML = `${formatDate}, ${hour}:${minutes}`;
}

let weatherSubmit = document.querySelector("#weather-submit");
weatherSubmit.addEventListener("submit", displayCity);
