function displayCity(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#inputElement");
  let weatherCityName = document.querySelector("#weather-city-name");
  weatherCityName.innerHTML = inputElement.value;
  console.log(weatherCityName);
}

let weatherSubmit = document.querySelector("#weatherSubmit");
weatherSubmit.addEventListener("submit", displayCity);
