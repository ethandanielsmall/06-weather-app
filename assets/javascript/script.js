const weatherApiKey = '9573bc66649be96e7330a4311c6baf7d';
let savedCities = [];

function search(){
    $("#search-button").on("click", function () {
        //get value in input search-value.
        var searchTerm = $("#search-value").val();
        //empty input field.
        $("#search-value").val("");
        console.log("clicketh")
      });

function getWeather() {
    var cityHourlyForecast = "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=" + city + "&appid=9573bc66649be96e7330a4311c6baf7d"
    };


    
};

document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      console.log("an enter has occured")
    }
});

// to get the weather
// type the weather in the bar
// hit enter
// console.log the humidity of the city ig!!!
    
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city