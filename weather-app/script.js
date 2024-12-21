document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '0bbbb41f4c0008694670306b429107e6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = `City: ${data.name}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            } else {
                document.getElementById('cityName').textContent = `City not found.`;
                document.getElementById('temperature').textContent = '';
                document.getElementById('description').textContent = '';
            }
        })
        .catch(error => console.error('Error:', error));
  });
  
  