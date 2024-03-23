let isFahrenheit = false;

const form = document.getElementById("weatherForm");
const weatherInfo = document.getElementById("weatherInfo");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById("city").value;
    await getWeather(city);
});

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f59d98999cecfcf638aa71d6f580ea19`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            displayError(data.message);
        }
    } catch (error) {
        displayError("Failed to fetch weather data.");
    }
}

function displayWeather(data) {
    weatherInfo.classList.add('active');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p data-value="${data.main.temp}" data-unit="celsius">Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
    `;
}

function displayError(message) {
weatherInfo.classList.add('active');
weatherInfo.innerHTML = `<p class="error">Error: ${message}</p>`;
}

function changeToFahrenheit() {
const temperatureElements = document.querySelectorAll('#weatherInfo p[data-unit="celsius"]');
const button = document.querySelector('button');

if (isFahrenheit === true) {
temperatureElements.forEach(element => {
    element.innerText = `Temperature: ${element.dataset.value}°C`;
    element.dataset.unit = "celsius";
});
button.innerText = "Use Fahrenheit";
isFahrenheit = false;
} else {
temperatureElements.forEach(element => {
    const celsiusString = element.dataset.value;
    const celsius = +celsiusString;
    const fahrenheit = (celsius * 9/5) + 32;
    const roundedFahrenheit = Math.round(fahrenheit * 100) / 100;
    element.innerText = `Temperature: ${roundedFahrenheit}°F`;
    element.dataset.unit = "fahrenheit";
});
button.innerText = "Use Degrees";
isFahrenheit = true;
}
}