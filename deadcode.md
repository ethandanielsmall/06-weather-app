https://openweathermap.org/

https://getbootstrap.com/

https://day.js.org/ -USE DAYJS to get times- go back to the other projects if u need to know how to use this darned thing lol


function getWeather() {
    var weatherCallByCity = "https://pro.openweathermap.org/data/2.5/forecast/hourly?id=" + city + "&appid=9573bc66649be96e7330a4311c6baf7d"
    };



    
function search(){
    $("#search-button").on("click", function () {
        //get value in input search-value.
        var searchTerm = $("#search-value").val();
        //empty input field.
        $("#search-value").val("");
        weatherFunction(searchTerm);
        weatherForecast(searchTerm);
      });
};

document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      console.log("an enter has occured")
    }
});