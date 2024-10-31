/* 
    Un oggetto è un contenitore di valori eterogenei messi insieme a formare una struttura unica che ha un'identità. Viene utilizzato per rappresentare un'entità specifica, per esempio una persona, un ordine, una fattura, una prenotazione, ecc. tramite l'aggregazione di dati e funzionalità.

    Un oggetto tipicamente possiede:
        - Dati, ovvero delle proprietà, rappresentate da una coppia chiave/valore
        - Funzionalità, ovvero dei metodi, rappresentate da funzioni

    ESEMPIO REALE

    Telefono è un oggetto
    Caratteristiche                 Funzionalità
    - colore                        - squillare
    - dimensioni                    - fare foto
    - modello                       - riprodurre musica

    ESEMPI IN JAVASCRIPT

    Utente
            proprietà                   metodi
            - email                     - login
            - username                  - logout
            - password

    Blog post
            proprietà                   metodi
            - data                      - publish
            - autore                    - unpublish
            - tag                       - delete
            - visualizzazioni
            - titolo 
            - contenuto
*/
/* ---------------------------- creare un oggetto --------------------------- */
// Object literal notation - creare un oggetto in maniera letterale
let user = {
    // Le proprietà sono coppie di chiave/valore separate da virgole
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    post: ['Perché saltare in testa ai Goomba?', 'Come salvare una principessa in 10 passi']
};

console.log(user);

// Accedere alle proprietà
// dot notation
console.log(user.nome);
console.log(user.post[1]);

// Bracket notation
console.log(user['email']);

let chiave = 'paese';
console.log(user[chiave]);

// Una proprietà può assumere qualsiasi valore da un'espressione JS, compreso un altro oggetto, quindi possiamo creare oggetti annidati
let garage = {
    macchina: {
        interno: {
            vanoOggetti: 'libretto',
            sedilePasseggero: 'briciole'
        },
        esterno: {
            bagagliaio: 'ruota di scorta'
        }
    }
};

let contenutoVanoOggetti = garage.macchina.interno.vanoOggetti;
console.log(contenutoVanoOggetti);

// Possiamo creare un oggetto vuoto e assegnargli in seguito delle proprietà
let persona = {};

persona.nome = 'Milo';
persona.cognome = 'Spandre';
persona.indirizzo = {
    via: 'Via Roma',
    numero: 19,
    CAP: '10100',
    citta: 'Torino'
};
persona.eta = 33;

console.log(persona);
console.log(persona.indirizzo.citta);