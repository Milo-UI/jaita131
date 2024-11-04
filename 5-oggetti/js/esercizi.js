/* ------------------------------- Esercizio 1 ------------------------------ */
/*
    Progettare l'array di oggetti canzone, ognuna con le proprietà titolo, band e anno. Fare inserire all'utente una nuova canzone attraverso un prompt. Visualizzare il nuovo oggetto così costruito e l'array aggiornato.
*/

let canzoni = [{
        titolo: 'Stairway to Heaven',
        band: 'Led Zeppelin',
        anno: '1971'
    },
    {
        titolo: 'Wish You Were Here',
        band: 'Pink Floyd',
        anno: '1971'
    }
];

// console.log(canzoni);

// canzoni.push({
//     titolo: prompt('Titolo della canzone'),
//     band: prompt('Band della canzone'),
//     anno: prompt('Anno di pubblicazione')
// });

// console.log(canzoni);
// console.log(canzoni[canzoni.length - 1]);

/* ------------------------------- Esercizio 2 ------------------------------ */
/*
    Progettare un array di automobili che contiene alcuni oggetti, con le proprietà marca, modello, colore, alimentazione, anno e cavalli.

    - Visualizzare tutti i dati in console
    - Cancellare da tutte le auto la proprietà cavalli (operatore delete)
    - Modificare la proprietà anno solo nelle auto di colore bianco, impostandolo a 2023
*/
let automobili = [{
        marca: 'Fiat',
        modello: 'Panda',
        colore: 'bianco',
        alimentazione: 'benzina',
        anno: 2010,
        cavalli: 70
    },
    {
        marca: 'Fiat',
        modello: 'Multipla',
        colore: 'grigio',
        alimentazione: 'diesel',
        anno: 2012,
        cavalli: 100
    },
    {
        marca: 'Jeep',
        modello: 'Wrangler',
        colore: 'verde pisello',
        alimentazione: 'diesel',
        anno: 2019,
        cavalli: 140
    },
    {
        marca: 'Audi',
        modello: 'A1',
        colore: 'bianco',
        alimentazione: 'diesel',
        anno: 2021,
        cavalli: 240
    },
    {
        marca: 'Alfred',
        modello: 'Batmobile',
        colore: 'nera',
        alimentazione: 'vegana',
        anno: 1999,
        cavalli: 4000
    }
];

console.log(automobili);
console.log(automobili[0].cavalli);

// Cancello da tutte le automobili la proprietà cavalli e cambio l'anno di tutte le macchine bianche in 2023
for (let i = 0; i < automobili.length; i++) {
    delete automobili[i].cavalli;

    // console.log(automobili);
    // console.log(automobili[0].cavalli);

    if (automobili[i].colore === 'bianco') {
        automobili[i].anno = 2023;
    };
};

console.log(automobili);

// Rimuovo le auto di marca Fiat
// let automobiliSenzaFiat = [];

// for (let i = 0; i < automobili.length; i++) {
//     if (automobili[i].marca !== 'Fiat') {
//         automobiliSenzaFiat.push(automobili[i]);
//     }
// }

// console.log(automobiliSenzaFiat);

// Con il metodo filter()
automobili = automobili.filter(auto => auto.marca !== 'Fiat');

console.log(automobili);

// let scoreOne = 50;
// let scoreTwo = scoreOne;
// scoreOne = 100;

// console.log(scoreOne, scoreTwo);