fetch ('https://api.openweathermap.org/data/2.5/forecast?q=UnitedStates&limit=5&appid&appid=db0dc706eb3beb6a4611c862293b870b',{

})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });