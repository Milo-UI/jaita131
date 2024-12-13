/*
    I Set sono collezioni di valori unici, che significa che non possono contenere duplicati. I Set sono utili quando desideriamo memorizzare una lista di elementi e garantire che ogni elemento sia presente solo una volta.

    Se proviamo ad aggiungere un valore già presente, questo non verrà aggiunto.
    Gli elementi in un set mantengono l'ordine di inserimento.

    Metodi principali: 
        - add(value): Aggiunge un valore al Set.
        - delete(value): Rimuove un valore dal Set.
        - has(value): Controlla se un valore è presente nel Set.
        - clear(): Rimuove tutti i valori dal Set.
        - size: Proprietà che restituisce il numero di elementi nel Set.
*/
const arrayNomi = ['milo', 'allen', 'milo', 'dario'];
console.log(arrayNomi);

const setNomi = new Set(arrayNomi);
console.log(setNomi);

// Se volessimo ottenere un array con i valori contenuti in un Set possiamo utilizzare la sintassi spread
const nomiUnici = [...setNomi];
console.log(nomiUnici);

// Set ha i suoi metodi
const eta = new Set();

// Aggiungo dei valori al Set
eta.add(20);
eta.add(25).add(30);
eta.add(25);

// Rimuovo un valore
eta.delete(25);

console.log(eta);

// Controllo se c'è un elemento nel Set
console.log(eta.has(30), eta.has(25)); // Restituisce un booleano

// Non abbiamo la proprietà length, ma ha size
console.log(eta.size);

// Rimovo tutti i valori di un set
eta.clear();
console.log(eta);

// Posso usare il metodo forEach() sui Set
const personaggi = new Set([{
        nome: 'mario',
        eta: 40
    },
    {
        nome: 'luigi',
        eta: 38
    },
    {
        nome: 'yoshi',
        eta: 15
    }
]);

personaggi.forEach(personaggio => {
    console.log(personaggio.nome, personaggio.eta);
});