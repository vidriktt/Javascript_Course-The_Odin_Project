// WheaterApi key=52102a918a83403aa39194654232303

const searchForm = document.getElementById("search-form");
const loader = document.getElementById("loader");
const errorHeader = document.getElementById("error-header");
const responseArticle = document.getElementById("response-article");

const tempC = document.getElementById("temp_c");
const tempF = document.getElementById("temp_f");
const precipMm = document.getElementById("precip_mm");
const precipIn = document.getElementById("precip_in");
const windKph = document.getElementById("wind_kph");
const windMph = document.getElementById("wind_mph");

document.addEventListener("click", (e) => {
    if (e.target && e.target.type === "checkbox") {
        if (tempC.hidden === true) {
            tempC.hidden = false;
            tempF.hidden = true;
            precipMm.hidden = false;
            precipIn.hidden = true;
            windKph.hidden = false;
            windMph.hidden = true;
        } else {
            tempC.hidden = true;
            tempF.hidden = false;
            precipMm.hidden = true;
            precipIn.hidden = false;
            windKph.hidden = true;
            windMph.hidden = false;
        }
    }
});

function populateArticle(data) {
    if (data.location) {
        responseArticle.getElementsByTagName("header")[0].innerHTML = `<h4>${data.location.name}</h4>${data.location.country}<br><br>${data.location.localtime.split(" ")[1]}`;

        tempC.innerHTML = `<h1>${data.current.temp_c} °</h1>Feels like: ${data.current.feelslike_c}°`;
        tempF.innerHTML = `<h1>${data.current.temp_f} °</h1>Feels like: ${data.current.feelslike_f}°`;

        const condition = document.getElementById("condition");
        condition.innerHTML = `<h5>${data.current.condition.text}</h5><img src="http://${data.current.condition.icon.slice(2)}">`;

        precipMm.innerHTML = `${data.current.precip_mm} mm`;
        precipIn.innerHTML = `${data.current.precip_in} in`;

        windKph.innerHTML = `Wind: <b>${data.current.wind_kph} kp/h</b>`;
        windMph.innerHTML = `Wind: <b>${data.current.wind_mph} mp/h</b>`;

        const humidity = document.getElementById("humidity");
        humidity.innerHTML = `Humidity: <b>${data.current.humidity} %</b>`;

        const uv = document.getElementById("uv");
        uv.innerHTML = `UV index: <b>${data.current.uv}</b>`;
    }
}

async function getWeatherData(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=52102a918a83403aa39194654232303&q=${city}`, { mode: "cors" });
    const weatherData = await response.json();

    if (weatherData.error) {
        loader.hidden = true;
        errorHeader.hidden = false;
    } else {
        loader.hidden = true;
        responseArticle.hidden = false;
        populateArticle(weatherData);
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    errorHeader.hidden = true;
    responseArticle.hidden = true;
    loader.hidden = false;

    getWeatherData(event.target.elements.search.value);
});

populateArticle(getWeatherData("london"));
