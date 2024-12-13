/*
    Quando dobbiamo creare molti oggetti dello stesso tipo, viene scomodo usare la literal notation.
    Abbiamo metodi diversi per farlo in maniera più semplice e veloce.

    Uno di questi, aggiunto da poco, è con l'utilizzo delle classi, che mantengono il codice più pulito e più facile da leggere.

    Una classe è come il 'blueprint,' il progetto, di un oggetto, che descrive come questo debba essere creato. Mappa quindi tutte le proprietà ele funzionalità che l'oggetto deve avere. Alla creazione di un oggetto tramite una classe, ci basterà specificare i valori delle sue proprietà.

    All'interno di una classe, troviamo la funzione costruttore, ovvero la funzione che sarà incaricata di creare gli oggetti. Quando creeremmo un nuovo oggetto utilizzando la parola chiave new, verrà chiamata la funzione costruttore che si trova dentro la classe per settare tutte le proprietà del nuovo oggetto.

    - parola chiave class
    - nome dell'oggetto che vogliamo creare sempre con la prima lettera maiuscola
    - tra le graffe riportiamo la funzione costruttore
*/
// Creiamo una classe per gli oggetti User
class User {
    constructor(username, email) {
        // settiamo le proprietà 
        this.username = username;
        this.email = email;
    }
}

const userOne = new User('mario', 'mario@mail.com');
const userTwo = new User('luigi', 'luigi@mail.com'); // Passo i valori come argomenti

console.log(userOne, userTwo);