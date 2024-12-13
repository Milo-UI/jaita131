const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const previsione = new Previsione();

console.log(previsione);

const updateUI = (data) => {
    console.log(data);

    const {
        cityDetails,
        weather
    } = data;

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

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // Otteniamo il valore della città scritto dall'utente
    const city = cityForm.city.value.trim();
    cityForm.reset(); // pulisco i campi del form

    // console.log(city);
    previsione.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
    previsione.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}