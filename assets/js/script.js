var searchBtn = document.querySelector('.city-search')
var cityText = document.querySelector('.city-text');
var APIkey = 'db0dc706eb3beb6a4611c862293b870b'
var weatherContainer = document.getElementById('weather-container')



searchBtn.addEventListener('click', function(e){
e.preventDefault()
console.log('checked')
var cityName = cityText.value
console.log(cityText.value)
var weatherApi =`http://api.openweathermap.org/geo/1.0/direct?q=${cityText},&appid=${APIkey}`
fetch (weatherApi)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  
      for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        var fiveDay = document.createElement('li');

        //Setting the text of the h3 element and p element.
        fiveDay.textContent = data[i].weather;
        

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        weatherContainer.append(fiveDay);
        
      }
    })
    .catch(function(error){
      console.log(error)
    })
})

