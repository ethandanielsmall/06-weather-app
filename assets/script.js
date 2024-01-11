$(document).ready(function () {
  $("#search-button").on("click", function () {
    const searchTerm = $("#search-value").val();
    weatherCurrent(searchTerm);
    weatherForecast(searchTerm);
  });

  let saved = [];
  const savedCity = localStorage.getItem("saved");
  if (savedCity) {
      saved = JSON.parse(savedCity);
  }

  for (var i = 0; i < saved.length; i++) {
      createRow(saved[i]);
  }

  function createRow(text) {
      const listItem = $("<li>").addClass("list-group-item").text(text);
      $(".saved").append(listItem);
    }

  $(".saved").on("click", "li", function () {
      weatherCurrent($(this).text());
      weatherForecast($(this).text());
  });

  function weatherCurrent(searchTerm) {

    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=9573bc66649be96e7330a4311c6baf7d",

    }).then(function (data) {
      if (saved.indexOf(searchTerm) == -1) {
        saved.push(searchTerm);
        localStorage.setItem("saved", JSON.stringify(saved));
        createRow(searchTerm);
      }
      $("#today").empty();

      const title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
      const img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

      const card = $("<div>").addClass("card");
      const cardBody = $("<div>").addClass("card-body");
      const wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
      const humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
      const temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " K");

      title.append(img);
      cardBody.append(title, temp, humid, wind);
      card.append(cardBody);
      $("#today").append(card);
    });
  }

  function weatherForecast(searchTerm) {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&appid=9573bc66649be96e7330a4311c6baf7d&units=imperial",

    }).then(function (data) {
      $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");

      for (var i = 0; i < data.list.length; i++) {

          // saying that if its beyond five days, dont worry about it
        if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {

          const titleFive = $("<h3>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
          const imgFive = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
          const colFive = $("<div>").addClass("col-md-2.5");
          const cardFive = $("<div>").addClass("card");
          const cardBodyFive = $("<div>").addClass("card-body p-1");
          const humidFive = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");
          const tempFive = $("<p>").addClass("card-text").text("Temperature: " + data.list[i].main.temp + " °F");

          colFive.append(cardFive.append(cardBodyFive.append(titleFive, imgFive, tempFive, humidFive)));
          $("#forecast .row").append(colFive);
        }
      }
    });
  };
});