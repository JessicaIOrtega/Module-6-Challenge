// var APIKey = "d6cd51e3fd9e0ab5908f53563b08c5c6";
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var currentDate = moment().format('dddd,MMMM Do, YYYY');

var inputField = document.querySelector("#cityInput");
var citySearchBtn = document.querySelector("#search-button");
var weatherCard = document.querySelector("#weather-container");
var weatherCards = document.querySelector("#weather-containers");
var displayIcon = document.querySelector("#tempicon");
var displayTemp = document.querySelector("#temperature");
var displayHumidity = document.querySelector("#humidity");
var displayWind = document.querySelector("#wind");

var forecast = document.querySelector("#forecast");
var pastSearch = document.querySelector("#past-search");

weatherCard.style.display = "none";
weatherCards.style.display = "none";

citySearchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var cityName = inputField.value;
    var today = dayjs();
    $('#currentDay').text(cityName.toUpperCase() + " " + today.format('(MM/DD/YYYY)'));

    weatherAPI(cityName)
    weatherCard.style.display = "flex";
    weatherCards.style.display = "flex";
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
            // console.log("This is the info in response", response);

            iconValue = response.weather[0].icon
            displayIcon.src = "http://openweathermap.org/img/wn/" + iconValue + ".png"
            displayTemp.textContent = "Temperature: " + Math.round((response.main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind.textContent = "Wind: " + response.wind.speed + " mph";
            displayHumidity.textContent = "Humidity: " + response.main.humidity + " %";

            localStorage.setItem("City", city);
        });

    // get 5day forecast
    var forecast5 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey + '&cnt=5'

    fetch(forecast5)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            // console.log('this is my 5day data', response)



            var displayDate = document.querySelector('#currentDay2');
            displayDate.textContent = moment().add(1, 'days').format('dddd, MMMM Do');
            var displayIcon2 = document.querySelector("#tempicon2");
            var displayTemp2 = document.querySelector("#temperature2");
            var displayHumidity2 = document.querySelector("#humidity2");
            var displayWind2 = document.querySelector("#wind2");

            iconValue2 = response.list[0].weather[0].icon
            displayIcon2.src = "http://openweathermap.org/img/wn/" + iconValue2 + ".png"
            displayTemp2.textContent = "Temperature: " + Math.round((response.list[0].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind2.textContent = "Wind: " + response.list[0].wind.speed + " mph";
            displayHumidity2.textContent = "Humidity: " + response.list[0].main.humidity + " %";

            //OPTION IN CASE FOR LOOP DOESNT WORK

            var displayDate = document.querySelector('#currentDay3');
            displayDate.textContent = moment().add(2, 'days').format('dddd, MMMM Do');
            var displayIcon3 = document.querySelector("#tempicon3");
            var displayTemp3 = document.querySelector("#temperature3");
            var displayHumidity3 = document.querySelector("#humidity3");
            var displayWind3 = document.querySelector("#wind3");

            iconValue3 = response.list[1].weather[0].icon
            displayIcon3.src = "http://openweathermap.org/img/wn/" + iconValue3 + ".png"
            displayTemp3.textContent = "Temperature: " + Math.round((response.list[1].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind3.textContent = "Wind: " + response.list[1].wind.speed + " mph";
            displayHumidity3.textContent = "Humidity: " + response.list[1].main.humidity + " %";


            var displayDate = document.querySelector('#currentDay4');
            displayDate.textContent = moment().add(3, 'days').format('dddd, MMMM Do');
            var displayIcon4 = document.querySelector("#tempicon4");
            var displayTemp4 = document.querySelector("#temperature4");
            var displayHumidity4 = document.querySelector("#humidity4");
            var displayWind4 = document.querySelector("#wind4");

            iconValue4 = response.list[2].weather[0].icon
            displayIcon4.src = "http://openweathermap.org/img/wn/" + iconValue4 + ".png"
            displayTemp4.textContent = "Temperature: " + Math.round((response.list[2].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind4.textContent = "Wind: " + response.list[2].wind.speed + " mph";
            displayHumidity4.textContent = "Humidity: " + response.list[2].main.humidity + " %";


            var displayDate = document.querySelector('#currentDay5');
            displayDate.textContent = moment().add(4, 'days').format('dddd, MMMM Do');
            var displayIcon5 = document.querySelector("#tempicon5");
            var displayTemp5 = document.querySelector("#temperature5");
            var displayHumidity5 = document.querySelector("#humidity5");
            var displayWind5 = document.querySelector("#wind5");

            iconValue5 = response.list[3].weather[0].icon
            displayIcon5.src = "http://openweathermap.org/img/wn/" + iconValue5 + ".png"
            displayTemp5.textContent = "Temperature: " + Math.round((response.list[3].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind5.textContent = "Wind: " + response.list[3].wind.speed + " mph";
            displayHumidity5.textContent = "Humidity: " + response.list[3].main.humidity + " %";


            var displayDate = document.querySelector('#currentDay6');
            displayDate.textContent = moment().add(5, 'days').format('dddd, MMMM Do');
            var displayIcon6 = document.querySelector("#tempicon6");
            var displayTemp6 = document.querySelector("#temperature6");
            var displayHumidity6 = document.querySelector("#humidity6");
            var displayWind6 = document.querySelector("#wind6");

            iconValue6 = response.list[4].weather[0].icon
            displayIcon6.src = "http://openweathermap.org/img/wn/" + iconValue6 + ".png"
            displayTemp6.textContent = "Temperature: " + Math.round((response.list[4].main.temp - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
            displayWind6.textContent = "Wind: " + response.list[4].wind.speed + " mph";
            displayHumidity6.textContent = "Humidity: " + response.list[4].main.humidity + " %";



        });




    // forecast for 5 days
    // for (var i = 1; i < 6; i++) {
    //     var futureDay = document.createElement('div');
    //     var futureDayDate = document.createElement('h4');
    //     futureDayDate.textContent = moment().add(i, 'days').format('dddd, MMMM Do');
    //     futureDay.append(futureDayDate);

    //     futureDay.setAttribute('class', 'card');
    //     console.log('future day', futureDayDate)
    //     forecast.append(futureDayDate);

    //     var futureDayTemp = document.createElement('h5');
    //     futureDayTemp.textContent = "Temp: " + Math.round((forecast5.daily[i].temp.day - 273.15) * 9 / 5 + 32) + " \xB0" + "F";
    //     f.append(futureDayTemp)
    //     forecast.append(futureDay)
    // };

    for (var i = 0; i >= 5; i++) {
        $('weather-containers').appendChild('<div class="HERE"></div>')

    };

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

