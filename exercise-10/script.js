
const apiKey = '9c019516425808b7d42b532278701d28'; 

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const errorContainer = document.getElementById('error-container');
const weatherContainer = document.getElementById('weather-container');

// Event Listeners
searchBtn.addEventListener('click', fetchWeatherData);
cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchWeatherData();
    }
});

// Function to fetch weather data from the API
function fetchWeatherData() {
    const city = cityInput.value.trim();
    
    if (city === '') {
        showError('Please enter a city name');
        return;
    }
    
    // Clear previous errors
    errorContainer.textContent = '';
    
    // Show loading state
    weatherContainer.style.display = 'none';
    errorContainer.textContent = 'Loading...';
    
    // API URL
    const apiUrl = `https://api.weatherstack.com/data/2.5/weather?q=${city}&units=metric&appid=${9c019516425808b7d42b532278701d28}`;
    
    // Fetch data from API
    fetch(apiUrl)
        .then(response => {    
            if (!response.ok) {
                throw new Error('City not found. Please check the spelling and try again.');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
            errorContainer.textContent = '';
        })
        .catch(error => {
            showError(error.message);
            weatherContainer.style.display = 'none';
        });
}

// Function to display weather data
function displayWeatherData(data) {
    // Format the date
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Extract weather data
    const cityName = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;
    const weatherIcon = data.weather[0].icon;
    
    // Create the HTML content
    const weatherHTML = `
        <div class="weather-header">
            <div class="city-name">${cityName}, ${country}</div>
            <div class="weather-date">${formattedDate}</div>
        </div>
        <div class="weather-main">
            <div class="temperature">${temperature}°C</div>
            <div class="weather-icon">
                <img src="http://weatherstack.com/img/wn/${weatherIcon}@2x.png" alt="${description}">
                <div>${description}</div>
            </div>
        </div>
        <div class="weather-details">
            <div class="weather-detail">
                <div class="detail-label">FEELS LIKE</div>
                <div class="detail-value">${feelsLike}°C</div>
            </div>
            <div class="weather-detail">
                <div class="detail-label">HUMIDITY</div>
                <div class="detail-value">${humidity}%</div>
            </div>
            <div class="weather-detail">
                <div class="detail-label">WIND</div>
                <div class="detail-value">${windSpeed} m/s</div>
            </div>
            <div class="weather-detail">
                <div class="detail-label">PRESSURE</div>
                <div class="detail-value">${pressure} hPa</div>
            </div>
        </div>
    `;
    
    // Update the weather container
    weatherContainer.innerHTML = weatherHTML;
    weatherContainer.style.display = 'block';
}

// Function to show error messages
function showError(message) {
    errorContainer.textContent = message;
}