/*
    Nel caso dovessimo averne bisogno, possiamo cambiare il tipo di un valore.
    Per esempio, se abbiamo una stringa che contiene un numero e vogliamo utilizzare quel numero come tale, quindi per delle operazioni, potremmo incorrere in qualche difficoltà
*/
let score = '100';

console.log(score + 1); // Il numero che aggiungiamo verrà concatenato alla stringa, siccome il + è sia operatore aritmetico, sia operatore di concatenzaione

// Possiamo assicurarci che il valore della nostra variabile sia di tipo Number cambiandole il tipo
score = Number(score); // Number in questo caso prende la stringa e la trasforma in  numero
console.log(score + 1, typeof score);

// Se dovessimo fare il contrario (number -> string)
let result = String(50);

console.log(result, typeof result);

// Possiamo convertire anche i booleani. Ci sono alcuni valori che ci restituiranno true e altri false: numeri positivi e negativi restituiranno true, 0 restituirà false; stringhe di qualsiasi lunghezza sono true, stringhe vuote sono false
// let vittoria = Boolean(100);
// let vittoria = Boolean(0);
// let vittoria = Boolean('0');
let vittoria = Boolean('');

console.log(vittoria, typeof vittoria);