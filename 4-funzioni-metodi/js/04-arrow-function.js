/*
    Le arrow function sono funzioni scritte in maniera più moderna e concisa, rendendo il codice più breve e leggibile.
*/
// let calcArea = function(raggio) {
//     return 3.14 * raggio ** 2;
// };

// Non abbiamo bisogno della parola chiave
// let calcArea = (raggio) => {
//     return 3.14 * raggio ** 2;
// };

// Se abbiamo un solo parametro, possiamo omettere le parentesi tonde dei paramertri. Sono OBBLIGATORIE quando abbiamo più parametri o quando non ne abbiamo proprio
// let calcArea = raggio => {
//     return 3.14 * raggio ** 2;
// };

// Possiamo anche liberarci della parola chiave return e delle parentesi graffe, portando il blocco di codice sulla stessa linea della dichiarazione quando abbiamo un semplice retturn statement
let calcArea = raggio => 3.14 * raggio ** 2;

const area = calcArea(5);
console.log("L'area è di:", area);

// Secondo esempio
// const saluta = function() {
//     return 'Ciao utente!';
// };

const saluta = () => 'Ciao utente!';
let saluto = saluta();
console.log(saluto);

// Terzo esempio
// const calcolaScontrino = function(prodotti, tassa) {
//     let totale = 0;

//     for (let i = 0; i < prodotti.length; i++) {
//         totale += prodotti[i] + prodotti[i] * tassa;
//     }

//     return totale
// };

const calcolaScontrino = (prodotti, tassa) => {
    let totale = 0;

    for (let i = 0; i < prodotti.length; i++) {
        totale += prodotti[i] + prodotti[i] * tassa;
    }

    return totale
};

console.log(calcolaScontrino([10, 15, 30], 0.2));