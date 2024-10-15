/*
    Gli array ci permettono di memorizzare una collezione di valori correlati tra loro.

    Sono oggetti 0-based, cioè a ogni elemento viene assegnato un indice partendo da 0

    - Le parentesi quadre indicano l'inizio e la fine di un array.
    - Ogni elemento è separato da virgole
*/
let studenti = ['Salvatore', 'Lorena', 'Sam', 'Lucio', 'Stefano', 'Derby', 'Vincenzo'];

console.log(studenti);

// Si può estrarre un singolo elemento specifico utilizzando la bracket notation, andando a richiamare l'indice dell'array
let primoStudente = studenti[0];
let terzoStudente = studenti[2];

console.log(primoStudente, terzoStudente);

// Gli array accettano elementi di qualsiasi tipo
let ages = [20, 25, 30, 35];

// Possono anche accettare elementi di tipi diversi, ma ha poco senso visto che un array contiene valori correlati tra loro
let random = ['Milo', 'Allen', 30, 20];
console.log(random);

/* --------------------------------- length --------------------------------- */
// Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà length
let numeroStudenti = studenti.length;
console.log(numeroStudenti);

/* -------------------------------------------------------------------------- */
/*                             Metodi degli array                             */
/* -------------------------------------------------------------------------- */

/* -------------------------- cambiare gli elementi ------------------------- */
// Oltre che per estrapolare un elemento, si può usare l'indice per modificare l'array cambiando un elemento
studenti[1] = "Paola";
console.log(studenti);

/* --------------------------- aggiungere elementi -------------------------- */
// Possiamo aggiungere elementi alla FINE di un array con il metodo push()
studenti.push('Nelson', 'Erica');
console.log(studenti);

// Se invece si volesse aggiungere un elemento all'INIZIO di un array, si può fare con il metodo unshift()
studenti.unshift('Davide');
console.log(studenti);

/* --------------------------- rimuovere elementi --------------------------- */
// Si può rimuovere l'ULTIMO elemento di un array con il metodo pop()
studenti.pop();
console.log(studenti);

// Se invece si volesse rimuovere il PRIMO elemento: shift()
studenti.shift();
console.log(studenti);

/* ---------------------------------- join ---------------------------------- */
// Il metodo join() prende gli elementi di un array e li unisce all'interno di una STRINGA separati dal carattere o caratteri che gli passiamo tra le parentesi tonde
let allAges = ages.join(' ');
console.log(allAges);

/* --------------------------------- indexOf -------------------------------- */
// Come per le stringhe, possiamo risalire all'indice di un elemento
console.log(studenti.indexOf('Lucio'));

/* --------------------------------- concat --------------------------------- */
// Il metodo concat() prende un array e ne concatena un altro
let studentiAggiornato = studenti.concat(['Massimo', 'Laura']);
console.log(studentiAggiornato);

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/* 
    Lista della spesa:
    - creare due array:
        - il primo contiene la lista di prodotti da comprare
        - il secondo i prezzi dei prodotti
    - stampare in console il secondo elemento dell'array e il suo prezzo
    - popolare la lista della spesa che ha id lista con un list element per ogni prodotto, questo conterrà il nome del prodotto e il suo costo

    - Costruire un elemento html p nel quale verrà stampato il subtotale, cioè il totale della spesa senza l'iva

    - Costruire un altro p nel quale verrà stampata l'IVA(22%)

    - Calcolare il totale dei prezzi dei prodoti compreso di iva e scriverlo nel paragrafo con id totale

    - (Da fare per ultimo) All'avvio della pagina comparirà un prompt nel quale verrà chiesto il nome dell'utente. Questo nome verrà stampato in un tag h2 riportante il seguente testo: "Scontrino di nomeUtente"

    MINIMO 8 prodotti
*/
let prodotti = ['Pane', 'Nutella', 'Biscotti', 'Pasta', 'Carne', 'Insalata', 'Birra', 'Farina'];
let prezzi = [1.80, 5.66, 2.00, 0.75, 12, 0.90, 2.45, 1];

console.log(prodotti[1], prezzi[1]);

let elSubtotale = document.getElementById('subtotale');
let elIva = document.getElementById('iva');
let elTotale = document.getElementById('totale');
let elLista = document.getElementById('lista');
let elBenvenuto = document.getElementById('benvenuto');

let totale = 0;

for (let i = 0; i < prodotti.length; i++) {
    // console.log(prodotti[i], prezzi[i]);
    elLista.innerHTML += `<li>${prodotti[i]} ${prezzi[i].toFixed(2)}€</li>`;

    totale += prezzi[i];
}

elTotale.innerHTML = `Totale: ${totale}€`;

let ivaPagata = totale * 0.22;
let subtotale = totale - ivaPagata;

elIva.innerHTML = `Costo iva(22%): ${ivaPagata.toFixed(2)}€`;
elSubtotale.innerHTML = `Subtotale: ${subtotale.toFixed(2)}€`;

let nomeUtente = prompt("Ciao Utente, scrivi il tuo nome");

elBenvenuto.innerHTML = `Scontrino di ${nomeUtente}`;