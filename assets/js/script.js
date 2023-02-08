// var APIKey = "d6cd51e3fd9e0ab5908f53563b08c5c6";
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var currentDate = moment().format('dddd,MMMM Do, YYYY');

var inputField = document.querySelector("#cityInput");
var citySearchBtn = document.querySelector("#search-button");
var weatherCard = document.querySelector("#weather-container");
var weatherCard2 = document.querySelector("#weather-container2");
var displayIcon = document.querySelector("#tempicon");
var displayTemp = document.querySelector("#temperature");
var displayHumidity = document.querySelector("#humidity");
var displayWind = document.querySelector("#wind");

var forecast = document.querySelector("#forecast");
var pastSearch = document.querySelector("#past-search");

weatherCard.style.display = "none";
// weatherCard2.style.display = "none";

citySearchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var cityName = inputField.value;
    var today = dayjs();
    $('#currentDay').text(cityName.toUpperCase() + " " + today.format('(MM/DD/YYYY)'));

    weatherAPI(cityName)
    weatherCard.style.display = "flex";
    // weatherCard2.style.display = "flex";
});

function weatherAPI(city) {
    var APIKey = "d6cd51e3fd9e0ab5908f53563b08c5c6";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // console.log(city)

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            city = inputField.value;
            // console.log(inputField.value);
            // console.log("This  is my", response);
            // var lat = response.coord.lat;
            // var lon = response.coord.lon;

            iconValue = response.weather[0].icon
            displayIcon.src = "http://openweathermap.org/img/wn/" + iconValue + ".png"
            displayTemp.textContent = "Temperature: " + Math.round((response.main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind.textContent = "Wind: " + response.wind.speed + " mph";
            displayHumidity.textContent = "Humidity: " + response.main.humidity + " %";

            localStorage.setItem("City", city);
        });
    // console.log("this is my temp", response.main.temp)
    // console.log("temp in F", displayTemp)

    // get uv index

    var forecast5 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey + '&cnt=5'



    // var getUV = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon" + lon + "&exclude={part}&appid=";

    fetch(forecast5)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log('this is my uv data', response)

            var displayIcon2 = document.querySelector("#tempicon2");
            var displayTemp2 = document.querySelector("#temperature2");
            var displayHumidity2 = document.querySelector("#humidity2");
            var displayWind2 = document.querySelector("#wind2");

            iconValue2 = response.list[0].weather[0].icon
            displayIcon2.src = "http://openweathermap.org/img/wn/" + iconValue2 + ".png"
            displayTemp2.textContent = "Temperature: " + Math.round((response.list[0].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind2.textContent = "Wind: " + response.list[0].wind.speed + " mph";
            displayHumidity2.textContent = "Humidity: " + response.list[0].main.humidity + " %";

            // var displayIcon3 = document.querySelector("#tempicon3");
            // var displayTemp3 = document.querySelector("#temperature3");
            // var displayHumidity3 = document.querySelector("#humidity3");
            // var displayWind3 = document.querySelector("#wind3");

            // iconValue3 = response.list[1].weather[0].icon
            // displayIcon3.src = "http://openweathermap.org/img/wn/" + iconValue3 + ".png"
            // displayTemp3.textContent = "Temperature: " + Math.round((response.list[1].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            // displayWind3.textContent = "Wind: " + response.list[1].wind.speed + " mph";
            // displayHumidity3.textContent = "Humidity: " + response.list[1].main.humidity + " %";




            // for (var i = 0; i > response.length; i++) {


            //     var displayIcon2 = document.createElement('img');
            //     displayIcon2.setAttribute('id', 'tempicon2');

            //     var displayTemp2 = document.querySelector("#temperature2");
            //     var displayHumidity2 = document.querySelector("#humidity2");
            //     var displayWind2 = document.querySelector("#wind2");



            //     iconValue2 = response.list[0].weather[0].icon
            //     displayIcon2.src = "http://openweathermap.org/img/wn/" + iconValue2 + ".png"
            //     displayTemp2.textContent = "Temperature: " + Math.round((response.list[0].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            //     displayWind2.textContent = "Wind: " + response.list[0].wind.speed + " mph";
            //     displayHumidity2.textContent = "Humidity: " + response.list[0].main.humidity + " %";


            // }



        });


    for (var i = 1; i <= 5; i++) {
        // var card = $('#weather-containers').append("<div class='card2 card col-2'></div>");
        // var date = 
        // 

        var futureDay = $('#weather-containers').append("<div class='card2 card col-2'></div>");
        var futureDayDate = $('.card2').append('<h3 class="currentDay2"></h3>');
        futureDayDate.textContent = moment().add(i, 'days').format('dddd, MMMM Do');
        futureDay.append(futureDayDate);

        var icon = $('.card2').append('<img class="img-fluid" id="tempicon2" alt="Temperature icon showing weather conditions" />');
        icon = iconValue2 = response.list[i].weather[0].icon;



    }

    // forecast for 5 days
    // for (var i = 1; i < 6; i++) {
    //     

    //     futureDay.setAttribute('class', 'card');
    //     console.log('future day', futureDayDate)
    //     forecast.append(futureDayDate);

    //     var futureDayTemp = document.createElement('h5');
    //     futureDayTemp.textContent = "Temp: " + Math.round((forecast5.daily[i].temp.day - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
    //     f.append(futureDayTemp)
    //     forecast.append(futureDay)
    // };
};








function pastSearches() {
    var storedSearches = JSON.parse(localStorage.getItem("City"));
    removeAllChildNodes(pastSearch);

    for (let i = 0; i < storedSearches.length; i++) {
        let newChild = document.createElement("p");
        newChild.setAttribute("id", "searchedCity");
        newChild.textContent = storedSearches[i].itemSearched;
        pastSearch.appendChild(newChild);
    };
};

