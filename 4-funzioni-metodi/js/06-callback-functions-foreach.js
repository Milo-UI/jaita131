/* 
    Abbiamo visto che possiamo passare stringhe, numeri, o altro come argomento di una funzione, ma è anche possibile passare un'altra funzione, per richiamarla o eseguirla all'interno della funzione di partenza.
*/
// Creo una arrow function che ha come parametro una callback function
const myFunc = (callbackFunc) => {
    // fai qualcosa
    let valore = 50;
    // richiamo la funzione di callback
    callbackFunc(valore);
};

/* --------------------------------- forEach -------------------------------- */
/*
    forEach è un metodo per array che permette di iterare gli elementi di un array e si aspetta come argomento una callback function.

    Nella callback function possiamo passare dei parametri:
        - il primo sarà l'elemento dell'array che sta venendo iterato
        - il secondo sarà l'indice dell'elemento iterato
*/
let personaggi = ['mario', 'luigi', 'peach', 'yoshi', 'bowser'];

personaggi.forEach((personaggio, indice) => {
    // console.log('qualcosa');
    console.log(indice, personaggio);
});

// Posso anche creare una funzione di callback esterna e richiamarla nel forEach
const logPersonaggio = (personaggio, indice) => {
    console.log(`${indice} - Ciao ${personaggio}`);
};

personaggi.forEach(logPersonaggio);
// in questo caso non mettiamo le parentesi tonde quando scriviamo il nome della funzione di callback, erché stiamo solo fornendo il riferimento alla funzione e non la stiamo chiamando. Sarà poi il metodo forEach a chiamare la funzione per ogni elemento dell'array

let listaPersonaggi = document.getElementById('personaggi');
let html = ``;

personaggi.forEach(personaggio => {
    // creiamo un html template
    html += `<li>${personaggio}</li>`;
});

console.log(html);
listaPersonaggi.innerHTML = html;