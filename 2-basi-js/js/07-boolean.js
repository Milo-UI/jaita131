/*
    I booleani rappresentano due valori speciali in JavaScript: true e false.

    È importante capire che, anche se sono parole, non si tratta di stringhe, ma di veri e proprio valori che possono venire interpretati dal browser.
    Infatti non vengono scritti tra apici e in console vengono colorati diversamente.

    Usiamo i booleani per verificare delle condizioni all'interno del nostro codice, quindi per controllare che determinate cose siano vere o false. Infatti possiamo utilizzare alcuni metodi di stringhe, array, numeri, ecc che ci restituiranno un valore vero o falso, un booleano
*/
console.log(true, false, 'true', 'false');

// Esempio di metodi che restituiscono booleani
let email = 'milo@mail.com';

let checkString = email.includes('@');
console.log(checkString);

let students = ['Sam', 'Michele', 'Erica'];

let checkArray = students.includes('Milo');
console.log(checkArray);

/* 
    Possiamo anche utilizzare operatori di confronto per comparare due valori tra loro e questi ci restituiranno un valore di true o false
*/
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);