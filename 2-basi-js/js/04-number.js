/*
    OPERATORI
    Un'espressione è una combinazione di valori, variabili e operatori che rappresentano un nuovo valore

    Le espressioni si basano su elementi chiamati operatori, che ci permettono di creare un unico valore a partire da uno o più valori

    - Operatori di assegnazione     =
    - Operatori aritmetici          + - * / ++ -- ** %
    - Operatori per stringhe        +
    - Operatori di confronto        < <= > >= == != === !==
    - Operatori logici              && || ! (and, or, not)
*/

// Semplici operazioni
let somma = 10 + 5;
let sottrazione = 10 - 5;
let moltiplicazione = 10 * 5;
let divisione = 10 / 5;

console.log("somma = " + somma + ", sottrazione = " + sottrazione + ", moltiplicazione = " + moltiplicazione + " e divisione = " + divisione);

/*
    Ordine delle operazioni - B I D M A S
    B: Brackets (parentesi)
    I: Indices  (indici)
    D: Division (divisioni)
    M: Multiplication (moltiplicazioni)
    A: Addition (addizioni)
    S: Subtraction (sottrazioni)
*/
let result = 5 * (10 - 3) ** 2;
console.log(result);

// Possiamo anche incrementare di un'unità un valore numerico in una variabile senza per forza scrivere +1
let likes = 10;
likes++;
console.log(likes);

// Si può fare la stessa cosa anche per decrementare
let comments = 20;
comments--;
console.log(comments);

// Essendo una pratica comune quella di aggiungere, sottrarre, ecc un numero al valore di una variabile, esiste un modo veloce per ottenere il risultato (shorthand)
let a = 3;
let b = 17;
let c = 12;
let d = 5;

// Metodo lungo
a = a + 12;
b = b - 9;
c = c * 7;
d = d / 2;
console.log(a, b, c, d);

// Metodo veloce
a += 12;
b -= 9;
c *= 7;
d /= 2;
console.log(a, b, c, d);

/* 
    NaN - Not a Number. Otteniamo NaN quando cerchiamo di eseguire un'operazione che non ha senso, che non può restituirci un numero
*/
console.log(5 / "ciao");

// Possiamo concatenare dei numeri a delle stringhe
let blogCounter = 'Il blog ha ' + likes + ' like!';
console.log(blogCounter);

// Possiamo utilizzare JS per calcolare il resto. Questa operazione può essere usata anche per determinare se un numero è pari o dispari: se dividendo il valore per 2 il risultato è un numero intero, allora il valore è pari.
let resto = 11 % 3; // Il 3 sta 3 volte nell'11, 3+3+3=9, per arrivare a 11 manca 2, quindi il risultato sarà 2
console.log(resto);

// Pari o dispari?
let numero = 5;

if (numero % 2 === 0) {
    console.log(numero + " è pari.");
} else {
    console.log(numero + " è dispari.");
}

/* ------------------------------- Esercizio 1 ------------------------------ */
// Chiediamo all'utente in che anno è nato e diciamogli quanti anni ha


/* ------------------------------- Esercizio 2 ------------------------------ */
// Scrivere un programma che calcola il perimetro e l'area di un triangolo avente i lati della seguente lunghezza: 5, 6, 7.