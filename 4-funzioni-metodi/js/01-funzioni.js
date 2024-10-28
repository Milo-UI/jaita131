/*
    Le funzioni sono blocchi di codice riutilizzabili che possono essere eseguiti ogni volta che vengono chiamati, senza dover scrivere di nuovo lo stesso codice.

    Per dichiarare una funzione utilizziamo:
        - parola chiave function
        - nome della funzione
        - una lista di parametri tra parentesi tonde e separati da virgole
        - il blocco di codice da eseguire contenuto tra parentesi graffe (corpo della funzione)

    function nomeFunzione(parametro1, parametro2) {
        blocco di codice riutilizzabile
    }

    Per convenzione, si nominano le funzioni con dei verbi, così da far capire subito cosa fanno.
*/
// Dichiariamo una funzione che possiamo richiamare per svolgere il blocco di codice al suo interno ogni volta che vogliamo
function saluta() {
    console.log('Ciao!');
}

// Per eseguire una funzione, basta richiamarla utilizzando il suo nome seguito da parentesi tonde, nelle quali si passeranno eventuali argomenti se necessari
saluta();
saluta();
saluta();

// Possiamo salvare una funzione all'interno di una variabile e richiamarla in maniera molto simile (function expression). In questo caso la funzione sarà anonima, perché prenderà il nome della variabile.
let parla = function() {
    console.log('Sto parlando');
};

parla();
parla();

// Possiamo anche richiamare funzioni all'interno di altre funzioni
function chiediEta() {
    console.log('Quanti anni hai?');
}

function chiediProfessione() {
    console.log('Che lavoro fai?');
}

function eseguiTutto() {
    saluta();
    chiediEta();
    chiediProfessione();
}

eseguiTutto();