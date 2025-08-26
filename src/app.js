function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#weather-temperature");
  let weatherCityName = document.querySelector("#weather-city-name");
  let temperature = Math.round(response.data.temperature.current);
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon-element");

  weatherCityName.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = `${Math.round(response.data.wind.speed)}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-temperature-icon" />`;
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
