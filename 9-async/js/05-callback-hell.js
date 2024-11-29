/*
    Può capitare di dover prendere dati da diversi endpoint
*/
const getTodos = (risorsa, callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Non sono riuscito a recuperare i dati', undefined);
        }
    })

    request.open('GET', risorsa)
    request.send();
};

// Molto incasinato e confusionario quando iniziano a esserci troppi endpoint
getTodos('db/todos/milo.json', (err, data) => {
    console.log(data);

    getTodos('db/todos/mario.json', (err, data) => {
        console.log(data);

        getTodos('db/todos/yoshi.json', (err, data) => {
            console.log(data);
        })
    })
})