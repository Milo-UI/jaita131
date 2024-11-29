/*
    Abbiamo detto che quando facciamo una richiesta GET a un endpoint otteniamo i dati richiesti in formato JSON, che assomigliano a un array con tanti oggetti JS all'interno.
    PERÒ NON LO SONO!! Si tratta di una semplice stringa, ovvero un tipo di dato riconosciuto da ogni linguaggio.

    Dobbiamo quindi prendere questa stringa di JSON e trasformarla in qualcosa che sappiamo come utilizzare per ottenere ciò che ci interessa: oggetti in un array.
*/

const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // Prima di tutto trassformiamo il JSON che riceviamo in un array di oggetti JS
            let data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Non sono riuscito a recuperare i dati', undefined);
        }
    })
    
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.open('GET', '/9-async/db/todos.json')
    request.send();
};

getTodos((err, data) => {
    console.log('callback lanciata');

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})