function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#weather-temperature");
  let weatherCityName = document.querySelector("#weather-city-name");
  let temperature = Math.round(response.data.temperature.current);
  weatherCityName.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function displayCity(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-element");

  let city = inputElement.value;

  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiKeyUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiKeyUrl).then(displayTemperature);
}

let weatherSubmit = document.querySelector("#weather-submit");
weatherSubmit.addEventListener("submit", displayCity);
