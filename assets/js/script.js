var APIKey = "d6cd51e3fd9e0ab5908f53563b08c5c6";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var city = document.querySelector("#cityInput");

var citySearchBtn = document.querySelector("#search-button");

var weatherCard = document.querySelector("#weather-container");

var displayIcon = document.querySelector("#tempicon");
var displayTemp = document.querySelector("#temperature");
var displayHumidity = document.querySelector("#humidity");
var displayWind = document.querySelector("wind");

var pastSearch = document.querySelector("#past-search");

weatherCard.style.display = "none";

citySearchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    weatherCard.style.display = "flex";
    weatherAPI();
})

function weatherAPI(event) {
    fetch(queryURL)
        .then((response) => response.json())
        .then((response) => {
            city.textContent = response.name;
            console.log(response.name)
            console.log(response.main.temp)

            displayIcon.src = "https:" + response.weather.icon;
            displayTemp.textContent = response.main.temp;
            displayWind.textContent = response.wind.speed;
            displayHumidity.textContent = response.main.humidity;
            localStorage.setItem("City", response.city);
        })
        .catch((err) => console.error(err));

}

function pastSearches() {
    var storedSearches = JSON.parse(localStorage.getItem("City"));
    removeAllChildNodes(pastSearch);

    for (let i = 0; i < storedSearches.length; i++) {
        let newChild = document.createElement("p");
        newChild.setAttribute("id", "searchedCity");
        newChild.textContent = storedSearches[i].itemSearched;
        pastSearch.appendChild(newChild);
    };
}