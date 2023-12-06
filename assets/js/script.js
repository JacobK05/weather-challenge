var searchBtn = document.querySelector('.city-search')
var cityText = document.querySelector('.city-text')
var APIkey = 'db0dc706eb3beb6a4611c862293b870b'

var Coordinates = {
    
}



searchBtn.addEventListener('click', Coordinates)


fetch ('https://api.openweathermap.org/data/2.5/weather?q=miami&appid=db0dc706eb3beb6a4611c862293b870b',{
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });