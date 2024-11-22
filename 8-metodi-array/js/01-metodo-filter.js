/*
    filter() è un metodo per array che possiamo usare quando, per esempio, otteniamo dei dati da un database e vogliamo filtrare determinati elementi dell'array che riceviamo in base a una certa condizione.

    Questo metodo itera un array, come il forEach, ed effettua un controllo su ogni elemento all'interno di una funzione di callback. Se un elemento passa il controllo, questo viene mantenuto all'interno dell'array, ma se non soddisfa la condizione l'elemento viene rimosso dall'array.

    È un metodo "non distruttivo", cioè non altera l'array originale.
*/
let punteggi = [10, 30, 15, 25, 50, 40, 5];

punteggi.filter(punteggio => {
    return punteggio > 20;
})

// Essendo non distruttivo, l'array punteggi rimane invariato
console.log(punteggi);

// Per ottenere l'array filtrato, lo salvo in una variabile
let punteggiFiltrati = punteggi.filter(punteggio => {
    return punteggio > 20;
})

console.log(punteggiFiltrati);

// Per esempio, possiamo usare il metodo filter() per ottenere dall'elenco degli utenti di un sito solo quelli che hanno un abbonamento premium
const utenti = [
    {nome: 'milo', premium: true},
    {nome: 'davide', premium: false},
    {nome: 'allen', premium: true},
    {nome: 'dario', premium: false}
];

// let utentiPremium = utenti.filter(utente => {
//     return utente.premium;
// });

// Abbreviazione. Più semplice da leggere e più facile che si trovi nel codice di altri
let utentiPremium = utenti.filter(utente => utente.premium);

console.log(utentiPremium);