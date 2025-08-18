function displayTemperature(response) {
  let temperatureElement = document.querySelector("#weather-temperature");
  let weatherCityName = document.querySelector("#weather-city-name");
  let temperature = Math.round(response.data.currentConditions.temp);
  weatherCityName = response.data.address;
  temperatureElement.innerHTML = temperature;
  console.log(response.data);
}

function displayCity(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-element");

  let city = inputElement.value;

  let apiKey = "63340413at53cc6c6ba7a81a11oc3f05";
  let apiKeyUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

  axios.get(apiKeyUrl).then(displayTemperature);
}

let weatherSubmit = document.querySelector("#weather-submit");
weatherSubmit.addEventListener("submit", displayCity);
