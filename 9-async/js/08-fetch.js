/*
    Esiste un metodo più semplice e moderno per fare richieste HTTP ed è quello di usare la fetch API, che è una funzione già presente all'interno di JavaScript.

    - Mandiamo la richiesta all'endpoint
    - Prendiamo la response e utilizziamo il metodo json() per prendere i dati e parsarli
    - Usiamo i dati come preferiamo
    - Intercettiamo i possibili errori delle varie Promise
*/
// La fetch richiede come argomento la sorgente di dati che vogliamo recuperare e restituisce una Promise
// Se faccio un errore nell'endpoint, ricevo l'errore 404 in console, ma la Promise viene comunque risolta, perché la fetch rifiuta la promise solo quando abbiamo un errore del network, ma troviamo nella response uno status di 404. Dobbiamo quindi riccorrere a un if.
// fetch('db/todos/yoshis.json')
//     .then(response => {
//         console.log('Risolta:', response);
//     })
//     .catch(err => {
//         console.log('Rifiutata', err);
//     });

// Nella response vediamo tutta una serie di proprietà, ma non vediamo i dati. Per ottenerli dobbiamo usare il metodo json() dell'oggeto response, che recupera i dati, li parsa, ovvero li rasaforma da JSON a JS, e restituisce un'altra promise.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log('Risolta:', response);
        return response.json();
    })
    .then(data => { // Risolta la promise del metodo json() otteniamo i dati
        console.log(data);
    })
    .catch(err => {
        console.log('Rifiutata', err);
    });