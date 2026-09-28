// Script to fetch and display current weather for Sri Lanka and update footer information
const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=6.9271&longitude=79.8612&current=temperature_2m,weather_code,wind_speed_10m&wind_speed_unit=kmh&timezone=Asia%2FColombo";
// Mapping of weather codes to descriptions
const weatherDescriptions = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Rime Fog",
    51: "Light Drizzle",
    53: "Drizzle",
    55: "Heavy Drizzle",
    61: "Light Rain",
    63: "Rain",
    65: "Heavy Rain",
    71: "Light Snow",
    73: "Snow",
    75: "Heavy Snow",
    80: "Rain Showers",
    81: "Rain Showers",
    82: "Heavy Rain Showers",
    95: "Thunderstorm",
    96: "Thunderstorm with Hail",
    99: "Thunderstorm with Heavy Hail"
};
const weatherIcons = {
    0: "☀️",
    1: "🌤️",
    2: "🌤️",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    53: "🌦️",
    55: "🌧️",
    61: "🌧️",
    63: "🌧️",
    65: "🌧️",
    71: "🌨️",
    73: "🌨️",
    75: "❄️",
    80: "🌦️",
    81: "🌦️",
    82: "⛈️",
    95: "⛈️",
    96: "⛈️",
    99: "⛈️"
};
// Function to calculate wind chill based on temperature and wind speed
function calculateWindChill(temperature, windSpeed) {
    if (temperature > 10 || windSpeed <= 4.8) {
        return "N/A";
    }

    const windChill = 13.12 + 0.6215 * temperature
        - 11.37 * windSpeed ** 0.16
        + 0.3965 * temperature * windSpeed ** 0.16;

    return `${windChill.toFixed(1)} °C`;
}
// Function to display current weather
async function showCurrentWeather() {
    const status = document.querySelector("#weather-status");
    const details = document.querySelector("#weather-details");

    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`Weather request failed: ${response.status}`);
        }

        const data = await response.json();
        const current = data.current;
        const temperature = current.temperature_2m;
        const windSpeed = current.wind_speed_10m;
        document.querySelector("#weather-section").dataset.weatherIcon =
            weatherIcons[current.weather_code] ?? "🌤️";

        document.querySelector("#weather-temperature").textContent = `${temperature} °C`;
        document.querySelector("#weather-condition").textContent =
            weatherDescriptions[current.weather_code] ?? "Unknown";
        document.querySelector("#weather-wind").textContent = `${windSpeed} km/h`;
        document.querySelector("#weather-wind-chill").textContent =
            calculateWindChill(temperature, windSpeed);

        details.hidden = false;
        status.hidden = true;
    } catch (error) {
        status.textContent = "Weather is temporarily unavailable. Please try again later.";
        console.error(error);
    }
}
// Call the function to show current weather
showCurrentWeather();

// Update footer with current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector("nav ul.nav-list");