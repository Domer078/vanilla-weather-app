function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#weather-temperature");
  let weatherCityName = document.querySelector("#weather-city-name");
  let temperature = Math.round(response.data.currentConditions.temp);
  weatherCityName = response.data.address;
  temperatureElement.innerHTML = temperature;
}

function displayCity(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-element");

  let city = inputElement.value;

  let apiKey = "NNUKPDBZJA6GKCMAG54WNABX6";
  let apiKeyUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}&units=metric`;

  axios.get(apiKeyUrl).then(displayTemperature);
}

let weatherSubmit = document.querySelector("#weather-submit");
weatherSubmit.addEventListener("submit", displayCity);
