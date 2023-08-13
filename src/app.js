export default async function getWeather(city) {


    const loading = document.querySelector('#loading');
    loading.textContent = "Loading...";
    loading.style.display = "block";
    const img = document.querySelector('img');
    const cityInfo = document.querySelector('#city-info');
    img.src = "#";
    cityInfo.textContent = "";
    const tempAndWind = document.querySelector('#temp-and-wind');
    tempAndWind.textContent = "";



    try {
    
    const response = await fetch(
`https://api.weatherapi.com/v1/current.json?key=94f27891207f45c29e7154244231108&q=${city}`, {
            method: 'GET',
        });
    
    // Check the raw text of the response
    const responseText = await response.text();
    console.log(responseText);

    // If the responseText looks like valid JSON, then try to parse it
    const weatherData = JSON.parse(responseText);
    console.log(weatherData);

    console.log(weatherData.current.condition.icon);

    img.src = "https:" + weatherData.current.condition.icon;
    img.style.display = "block";

    cityInfo.textContent = weatherData.location.name + ", " + weatherData.location.region + ", " + weatherData.location.country;

    tempAndWind.textContent = weatherData.current.temp_f + "°F, " + weatherData.current.wind_mph + " mph";

    } catch (error) {
        console.log(error);
    } finally {
        console.log('This will always run');
        loading.style.display = "none";
    }
};