var searchBtn = document.querySelector('.city-search')
var cityText = document.querySelector('.city-text');
var APIkey = 'db0dc706eb3beb6a4611c862293b870b'
var weatherContainer = document.getElementById('weather-container')



searchBtn.addEventListener('click', function(e){
e.preventDefault()
console.log('checked')
var cityName = cityText.value
console.log(cityText.value)
fetch (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=5&units=imperial&appid=${APIkey}`)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    weatherContainer.innerHTML = `City: ${data.name}, Temperature: ${data.main.temp}, Weather: ${data.weather[0].description}`;
    })
    .catch(function(error){
      console.log(error)
    })
})

