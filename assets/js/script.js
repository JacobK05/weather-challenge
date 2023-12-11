var searchBtn = document.querySelector('.city-search')
var cityText = document.querySelector('.city-text');
var APIkey = 'db0dc706eb3beb6a4611c862293b870b'
var weatherContainer = document.getElementById('weather-container')



searchBtn.addEventListener('click', function(e){
e.preventDefault()
console.log('checked')
var cityName = cityText.value
console.log(cityText.value)
fetch (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=5&appid=${APIkey}`)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    weatherContainer.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
      var weatherData = data[i];
      var weatherInfo = document.createElement('div');
      weatherInfo.textContent = `City: ${weatherData.name}, Temperature: ${weatherData.main.temp}, Weather: ${weatherData.weather[0].description}`;
      weatherContainer.appendChild(weatherInfo);

    }
    })
    .catch(function(error){
      console.log(error)
    })
})

