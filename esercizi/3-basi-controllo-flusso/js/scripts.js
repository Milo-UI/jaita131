/* ------------------------------- Esercizio 1 ------------------------------ */
/*
    Scrivere un programmino che dica se un numero è pari o dispari.
*/
let num = 19;

if (num % 2 == 0) {
    console.log(num + " è un numero pari");
} else {
    console.log(num + " è un numero dispari");
}

/* ------------------------------- Esercizio 2 ------------------------------ */
/*
    Scrivi una catena di if-else in modo da soddisfare le seguanti consizioni per la scelta della taglia

    num >= 20 corrisponde a "XL"
    num < 20 corrisponde a "L"
    num < 15 corrisponde a "M"
    num < 10 corrisponde a "S"
    num < 5 corrisponde a "XS"
*/

let dimensione = 10;
let taglia = '';

if (dimensione < 5) {
    taglia = 'XS';
} else if (dimensione < 10) {
    taglia = 'S';
} else if (dimensione < 15) {
    taglia = 'M';
} else if (dimensione < 20) {
    taglia = 'L';
} else {
    taglia = 'XL';
}

console.log(`Ti consigliamo di scegliere la taglia ${taglia}.`);

/* ------------------------------- Esercizio 3 ------------------------------ */
/*
    Dati 3 numeri, determina se un triangolo è equilatero, isoscele o scaleno.
    Stampa in console:
    "Il triangolo è equilatero" se tutti i lati sono uguali
    "Il triangolo è isoscele" se almeno due lati sono uguali
    "Il triangolo è scaleno" se tutti i lati sono diversi
*/
let lato1 = 10;
let lato2 = 6;
let lato3 = 3;
triangolo = '';

if (lato1 == lato2 && lato1 == lato3) {
    triangolo = 'equilatero';
} else if (lato1 == lato2 || lato1 == lato3 || lato2 == lato3) {
    triangolo = 'isoscele';
} else {
    triangolo = 'scaleno';
}

console.log('Il triangolo è ' + triangolo);

/* ------------------------------- Esercizio 4 ------------------------------ */
/*
    Scrivere uno switch statement che stabilisca in che categoria ricade il valore numerico dato:

    da 1 a 3 = "Low"
    da 4 a 6 = "Mid"
    da 7 a 9 = "High"
    > di 9 = "Il numero è maggiore di 9"
*/
let val = 10;
let answer = "";

switch (val) {
    case 1:
    case 2:
    case 3:
        answer = "Low";
        break;

    case 4:
    case 5:
    case 6:
        answer = "Mid";
        break;

    case 7:
    case 8:
    case 9:
        answer = "High";
        break;

    default:
        answer = "Il numero è maggiore di 9"
        break;
}

console.log(answer);