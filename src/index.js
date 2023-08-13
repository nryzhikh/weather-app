import './styles.css';
import getWeather from './app';


document.addEventListener("DOMContentLoaded", function () {
    
    const root = document.createElement('div');
    const main = document.createElement('main');
    const mainTitle = document.createElement('h1');
    const mainSubtitle = document.createElement('h2');
    const form = document.createElement('form');
    form.classList.add = "fetched"
    form.onsubmit = event => {
        event.preventDefault();
        const city = document.getElementById('city').value;
        getWeather(city);
    };
    const select = document.createElement('select');
    const button = document.createElement('button');
    select.name = 'city';
    select.id = 'city';
    select.innerHTML = `
    <option value="Minsk">Minsk</option>
    <option value="Moscow">Moscow</option>
    <option value="London">London</option>
    <option value="New York">New York</option>
    <option value="Tokyo">Tokyo</option>
    `;
    const cityInfo = document.createElement('p');
    cityInfo.id = 'city-info';
    button.textContent = 'Get Weather';

    const tempAndWind = document.createElement('p');
    tempAndWind.id = 'temp-and-wind';


    form.appendChild(select);
    form.appendChild(button);

    const img = document.createElement('img');
    const weatherText = document.createElement('p');
   
    mainTitle.textContent = 'Main';
    mainSubtitle.textContent = 'This is the main';
    img.src="#";
    img.style.display = 'none';

    const loading = document.createElement('p');
    loading.id = 'loading';
    loading.textContent = 'Loading...';
    loading.style.display = 'none';


    main.appendChild(mainTitle);
    main.appendChild(mainSubtitle);
    main.appendChild(loading);
    main.appendChild(form);
    main.appendChild(cityInfo);
    main.appendChild(tempAndWind);
    main.appendChild(img);
    main.appendChild(weatherText);
    root.appendChild(main);

    document.body.appendChild(root);
    console.log(root)



});
