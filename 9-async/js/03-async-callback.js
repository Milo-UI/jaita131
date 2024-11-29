/*
    Abbiamo visto come fare una richiesta HTTP per ricevere i dati da un endpoint e come gestire gli errori. Come usiamo questi dati?
*/
// Avvolgiamo la request in una funzione che possiamo richiamare a piacimento per ottenere i dati
const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText);
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            // console.log('Non sono riuscito a recuperare i dati');
            callback('Non sono riuscito a recuperare i dati', undefined);
        }
    })
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todoss');
    request.send();
};

// Ora possiamo fare la richiesta quando vogliamo e possiamo passare una funzione di callback per fare quello che vogliamo coi dati ricevuti
getTodos((err, data) => {
    console.log('callback lanciata');
    // console.log(err, data);

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})