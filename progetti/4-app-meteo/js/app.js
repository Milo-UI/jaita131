const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    console.log(data);

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;
    // Destrutturare le proprietà
    const { cityDetails, weather } = data;

    // aggiorniamo il template dei dettagli
    details.innerHTML = `
        <h2 class="h5 my-3">${cityDetails.EnglishName}</h2>
        <div class="my-3">
            ${weather.WeatherText}
        </div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // aggiorniamo le immagini giorno/notte e le icone del meteo
    // let timeSrc = null;

    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg';
    // }

    // utilizziamo invece l'operatore ternario
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async city => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key)

    return {
        // Possiamo utilizzare la object shorthand notation quando il nome della proprietà e il suo valore sono uguali
        // cityDetails: cityDetails,
        // weather: weather
        cityDetails,
        weather
    };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // Otteniamo il valore della città scritto dall'utente
    const city = cityForm.city.value.trim();
    cityForm.reset(); // pulisco i campi del form

    // console.log(city);
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});