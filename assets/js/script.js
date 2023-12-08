var searchBtn = document.querySelector('.city-search')
var cityText = document.querySelector('.city-text');
var APIkey = 'db0dc706eb3beb6a4611c862293b870b'




searchBtn.addEventListener('click', function(){
var cityName = cityText.value
var weatherApi =`http://api.openweathermap.org/geo/1.0/direct?q=${cityText},&appid=${APIkey}`
})

fetch ()
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });