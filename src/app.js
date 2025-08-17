function displayTemperature(response) {
  console.log(response.data);
}

function displayCity(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-element");
  //   let weatherCityName = document.querySelector("#weather-city-name");
  let city = inputElement.value;

  let apiKey = "NNUKPDBZJA6GKCMAG54WNABX6";
  let apiKeyUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}&units=metric`;

  axios.get(apiKeyUrl).then(displayTemperature);
}

let weatherSubmit = document.querySelector("#weather-submit");
weatherSubmit.addEventListener("submit", displayCity);
