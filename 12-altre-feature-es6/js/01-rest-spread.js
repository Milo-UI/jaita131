/* ----------------------------- parametro rest ----------------------------- */
/*
    Il parametro rest ci permette di raccogliere un numero indefinito di argomenti in un array. Viene utilizzato nella definizione di funzioni per gestire in modo flessibile gli argomenti passati.


*/
// Se per esempio avessimo una funzione alla quale vogliamo passare degli argomenti, ma non sappiamo quanti, possiamo usare rest. Questo prenderà tutti gli argomenti che gli passeremo alla chiamata e li raccoglierà in un singolo parametro array.
const raddoppia = (...numeri) => {
    // console.log(numeri);

    return numeri.map(num => num * 2);
}

const result = raddoppia(1, 2, 4, 5, 7, 8, 4, 2);
console.log(result);

/* ----------------------------- sintassi spread ---------------------------- */
/*
    La sintassi spread ci consente di espandere un array in un contesto in cui ci si aspetta più elementi. Viene comunemente utilizzata per copiare, concatenare o passare elementi come argomenti.

    Simile a rest, la sintassi spread per separare un array nei suoi componenti individuali.
*/
const persone = ['milo', 'allen', 'dario'];
console.log(...persone); // a console ci saranno i tre elementi, ma non all'interno di un array

// Espandere un array
const membri = ['marinilda', 'egle', ...persone];
console.log(membri);

// [...elementi].forEach(element => {

// });

const persona = {
    nome: 'milo',
    eta: 33,
    posizione: 'docente'
};
console.log(persona);
// const clonePersona = persona; // Così non creo una copia dell'oggeto persona, ma un riferimento all'oggetto persona già esistente

const clonePersona = {
    ...persona,
    citta: "Torino" // Posso anche aggiungere nuove proprietà
}; // Così creo un oggetto nuovo ma con gli stessi parametri di persona
console.log(clonePersona);