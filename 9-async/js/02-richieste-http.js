/*
    Le HTTP request sono le tipiche azioni che richiedono tempo e per le quali useremo l'async.

    Spesso vorremo mostrare sulla nostra pagina dei dati che si trovano su un database o su un server da qualche parte (post, commenti, utenti, lista di canzoni, ecc). Utilizziamo una richiesta HTTP per raggiungere quel server o database per ottenere i dati che ci interessano e poi usarli come vogliamo. Per dire cosa vogliamo, facciamo delle richieste a quelli che si chiamano API endpoint, ovvero degli URL che il server rende accessibili.

    La richiesta all'endpointt ci restituisce i dati sotto forma di JSON (JavaScript Object Notation), un formato di scambio dati facilmente leggibile da macchine e umani, molto simile appunto a come vengono scritti gli oggetti JavaScript. Nasce infatti da JS, ma è utilizzabile da tutti i linguaggi di programmazione.

    Esistono diversi tipi di richieste HTTP che indicano l'azione da eseguire:

    - GET: per recuperare dati
    - POST: per inviare nuovi dati
    - PUT: per aggiornare dati esistenti
    - DELETE: per eliminare dati

    https://jsonplaceholder.typicode.com/
*/
// Vecchio metodo che veniva utilizzato prima dell'arrivo del JSON, ma funziona ancora. Invia una richiesta per ottenere dei dati
const request = new XMLHttpRequest();
// console.log(request);

// readystatechange è un evento che monitora lo stato di un oggetto XMLHTTPRequest (XHR) durante il processo di richiesta e risposta di un'API. Questo evento viene attivato ogni colte che cambia lo stato della richiesta
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    } else if (request.readyState === 4) {
        console.log('Non sono riuscito a recuperare i dati');
    }
})

// Il metodo open() "prepara" la richiesta e ha bisogno di due argomenti: il ipo di richiesta che vogliao fare e dove vogliamo mandare la richiesta, quindi l'endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

// Il metodo send() invia effettivamente la richiesta
request.send();