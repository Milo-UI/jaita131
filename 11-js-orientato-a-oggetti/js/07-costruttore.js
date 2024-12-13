/*
    Abbiamo usato la parola chiave class per creare delle classi JavaScript. Ma queste non sono altro che una semplificazione della sintassi, visto che in JS non esistono veramente le classi. Viene quindi sfruttato un modello a prototipi per simulare lo stesso comportamento.

    Cosa succede quando usiamo una classe in JS?
*/
// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//     }
// }

/* -------------------------- funzione costruttore -------------------------- */
// Nelle classi usiamo una funzione costruttore responsabile della costruzione dell'oggetto, ne crea quindi le proprietà e vi assegna dei valori. Ne abbiamo bisogno anche quando non usiamo la sintassi della classe:
function User(username, email) {
    this.username = username;
    this.email = email;

    // Possiamo anche creare dei metodi
    this.login = function() {
        console.log(`${this.username} ha effettuato il login`);
    }
    // C'è un modo più furbo e più corretto di aggiungere metodi a un oggetto di nostra creazione ed è tramite l'utilizzo di 'prototype'
}

const userOne = new User('link', 'link@kokiri.hy');
const userTwo = new User('zelda', 'zelda@hyrule.hy');

console.log(userOne, userTwo);


/*
    La parola chiave new:
        1 - Crea un nuovo oggetto vuoto {}
        2 - Lega il valore di 'this' al nuovo oggetto vuoto all'interno della funzione
        3 - Richiama la funzione costruttore per costruire l'oggetto
*/