/* -------------------------------- VARIABILI ------------------------------- */
/* 
    Le variabili ci permettono di salvare valori, come un nome o una mail, e di utilizzare quel valore ogni volta che vogliamo.
    Ci sono diversi modi di creare una variabile:
*/
// let è una parola chiave per indicare una variabile e impedisce di dichiarare due variabili con lo stesso nome; age è il nome che abbiamo assegnato alla variabile; 25 è il valore salvato nella variabile.
let age = 25;
let year = 2024;

console.log(age, year);

/* 
    È possibile sovrascrivere il valore di una variabile, di cambiarlo. Da qui il nome 'variabile'
*/
// Siccome la variabile age è già stata dichiarata e noi vogliamo solo cambiarne il valore, basta richiamarla utilizzando il suo nome e assegnarle il valore che preferiamo
age = 33;

console.log(age);

// Posso anche dichiarare una variabile e assegnarle un valore in un secondo momento
let firstName;
firstName = 'Milo';

console.log(firstName, age);

/* -------------------------------- COSTANTI -------------------------------- */
/* 
    Se vogliamo creare una variabile con un valore che nn deve mai cambiare, allora ci serve una costante.
    Per creare una costante, utilizziamo la parola chiave const:
*/
const POINTS = 100;

// Se proviamo a cambiarne il valore, il codice ci impedirà di farlo e la console ci restituirà un errore
// POINTS = 50;

console.log(POINTS);

/* 
    Esiste una terza keyword per creare le variabili: var, che NON impedisce di dichiarare due variabili con lo stesso nome.
*/
var score = 75;

console.log(score);

/* -------------------------- NOMI DELLE VARIABILI -------------------------- */
/*
    I nomi delle variabili seguono delle regole molto precise e delle convenzioni che aiutano a rendere il codice leggibile da chiunque:
    - niente spazi
    - possiamo usare camelCase (nomeDellaVariabile)
    - può contenere solo lettere, numeri, underscore (_) o $, ma non possono mai cominciare con un numero
    - non possiamo utilizzare le keyword adottate da JS come let, const e così via
    - il nome deve avere un senso, deve far capire all'istante cosa viene salvato in quella variabile, così da rendere il codice leggibile
*/

// Metodo per stampare direttamente nella pagina web (vecchio e deprecato)
document.write('<h2>' + firstName + ' ' + age + ' anni.</h2>');

// Chiediamo all'utente come si chiama e stampiamolo in console
let nomeUtente = prompt('Come ti chiami?');

console.log("L'utente ha detto di chiamarsi " + nomeUtente);

/* -------------------------------- ESERCIZIO ------------------------------- */
/*
    In un file js collegato a una pagina HTML, dichiara e assegna un valore alle seguenti variabili:
    nome, cognome, eta, citta, paese.
    Una volta assegnati i valori, stampa tutto in console e nella pagina web
*/