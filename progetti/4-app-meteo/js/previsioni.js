const key = 'vr68J2kAbYbVRbdzOZbQXpAvfGyt7tc6';

// Otteniamo le informazioni meteo
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// Otteniamo le informazioni della città
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// getCity('torino')
//     .then(data => {
//         getWeather(data.Key)
//             .then(data => console.log(data))
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err));