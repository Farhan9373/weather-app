const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');


search.addEventListener('click', () => {
    const APIKey = `9420c32916ad399ed22b266af04a9d1e`;
    const city = document.querySelector('.search-box input').value;
    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        const image = document.querySelector('.weather-detail img');
        const temp = document.querySelector('.weather-detail .temperature');
        const detail = document.querySelector('.weather-detail .detail');
        const humidity = document.querySelector('.humidity-info span');
        const wind = document.querySelector('.speed-info span');

        if (json.weather && json.weather.length > 0) {
            switch (json.weather[0].main.toLowerCase()) {
                case 'clear':
                    image.src = 'clear.png';
                    break;
                case 'clouds':
                    image.src = 'clouds.png';
                    break;
                case 'drizzle':
                    image.src = 'drizzle.png';
                    break;
                case 'mist':
                    image.src = 'mist.png';
                    break;
                case 'rain':
                    image.src = 'rain.png';
                    break;
                case 'snow':
                    image.src = 'snow.png';
                    break;
                default:
                    image.src = 'clear.png';
            }
        }
        temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        wind.innerHTML = `${json.wind.speed}km/h`;
        humidity.innerHTML=`${json.main.humidity}%`;
        detail.innerHTML=`${(json.weather[0].description)}`
    })



});