/*
    Il metodo reduce() non restituisce necessariamente un nuovo array, ma restituisce qualsiasi valore che vogliamo basato sul valore che si trova nell'array iterato.

    Chiama una callback function come forEach() e compagnia bella.
*/
const punteggi = [10, 20, 60, 40, 70, 90, 30];

// Se volessimo sapere QUANTI di questi punteggi siano superiori a 50:
// La callback function accetta in genere due parametri: accumulator e current
const risultati = punteggi.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }
    return acc
}); // Settiamo a 0 l'accumulator del metodo passandogli il valore iniziale come secondo argomento, altrimenti assume il valore del primo elemento dell'array

console.log(risultati);

// const somma = punteggi.reduce(sommaPunteggi, 0);
// function sommaPunteggi(totale, numero) {
//     return totale + numero;
// }

// const somma2 = punteggi.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// let punteggioTotale = 0;
// punteggi.forEach(punteggio => {
//     punteggioTotale += punteggio;
// });

// console.log(somma);
// console.log(somma2);

// Se avessimo un cabinato e volessimo accumulare i punteggi di un singolo giocatore che ha giocato più volte
const giocatori = [
    {giocatore: 'mario', punteggio: 50},
    {giocatore: 'yoshi', punteggio: 30},
    {giocatore: 'mario', punteggio: 70},
    {giocatore: 'bowser', punteggio: 60},
];

const totaleMario = giocatori.reduce((acc, curr) => {
    if (curr.giocatore === 'mario') {
        acc += curr.punteggio;
    }
    return acc;
}, 0);

console.log(totaleMario);

const totaleMario2 = giocatori.reduce((acc, curr) => {
    if (curr.giocatore === 'mario') {
        acc.acc1 += curr.punteggio;
        acc.acc2++
    }
    return acc;
}, {acc1: 0, acc2: 0});

console.log(`Mario ha accumulato ${totaleMario2.acc1} in ${totaleMario2.acc2} partite`);