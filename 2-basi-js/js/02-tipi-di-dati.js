/*
    JavaScript usa più tipi di dato:
    - Number:       numeri di tutti i tipi (1, 2, 3, 100, 3.14)
    - String:       serie di caratteri compresi tra apici ('hello world', "mail@gmail.com")
    - Boolean:      sono un valore speciale che indica vero o falso (true / false)
    - Null:         lo utilizziamo per indicare esplicitemente che una variabile non ha un valore
    - Undefined:    come Null, ma per variabili non ancora definite e viene assegnato dal browser
    - Object:       strutture di dati complesse con più proprietà e funzioni (Array, Date, Literals, ...)

    Una variabile può contenere qualsiasi tipo di dato e in JavaScript non siamo obbligati a specificare di che tipo di dato si tratti. Possiamo anche sovrascrivere il valore di una variabile con un diverso tipo di dato.

    JavaScript è un linguaggio debolmente tipizzto, cioè conosce benissimo i tipi di dato, ma non siamo obbligati a dichiararli
*/
let nomeDocente = 'Milo'; // string
let cognomeDocente = 'Spandre';
let etaDocente = 33; // number
let nomeCorso = 'JAITA131';
let materia = 'JavaScript';
let presenza = true; // boolean

// Quando in dubbio sul tipo di un dato, possiamo utilizzare l'operatore typeof seguito dalla variabile di cui ci interessa sapere il tipo
console.log(typeof nomeDocente);
console.log(typeof etaDocente);
console.log(typeof presenza);

console.log("Ciao, mi chiamo " + nomeDocente + " " + cognomeDocente + " ho " + etaDocente + " anni. Insegno " + materia + " nel corso " + nomeCorso + " e oggi sono " + presenza);

nomeDocente = 'Dario';
cognomeDocente = 'Mennillo';
etaDocente = 34;
materia = 'Java';

// Se cambio le variabili in modo da ottenere un docente diverso, posso creare un'altra variabile che contiene il messaggio per stamparlo aggiornato
let presentazione = "Ciao, mi chiamo " + nomeDocente + " " + cognomeDocente + " ho " + etaDocente + " anni. Insegno " + materia + " nel corso " + nomeCorso + " e oggi sono " + presenza;

console.log(presentazione);