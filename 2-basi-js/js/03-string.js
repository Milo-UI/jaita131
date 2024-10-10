/*
    Usiamo le stringhe per salvare una serie di lettere, numeri o altri caratteri, come un nome o un indirizzo email.
    Per assegnare una stringa come valore di una variabile, bisogna metterla tra virgolette (o apici)
*/
let stringa = "Sono una stringa!";
console.log(stringa);

// Se la stringa deve contenere a sua volta degli apici (o apostrofi), bisogna far capire che quegli apici fanno parte della stringa e non sono attinenti al codice.

// Un modo è quello di usare il backslash (\), che è un carattere di escape, prima di ogni apertura e chiusura di apici
let url = "<a href=\"https://www.google.com\">Questo è un link</a>";
let nomeLibro = 'L\'uomo del boh';

console.log(url, nomeLibro);

/*
    ALTRI UTILIZZI DEL CARATTERE DI ESCAPE
    \'  apostrofo o apice singolo
    \"  apici doppi
    \\  backslash
    \n  a capo
*/

// Un'alternativa è quella di usare gli apici singoli per dichiarare la stringa e usare gli apici doppi dove servono all'interno della stringa o viceversa
let quote = 'Ieri mi ha detto solo "Ciao!"';
console.log(quote);

/*
    Se volessimo unire più stringhe tra loro, possiamo usare quella che si chiama concatenazione e per farlo usiamo l'operatore di concatenazione +
*/
let ourString = 'Io vengo prima. ' + 'Io vengo dopo.';
console.log(ourString);

// Possiamo anche usare l'operatore += per concatenare stringhe
let stringaConc = 'Io vengo prima. ';
stringaConc += 'Io vengo dopo.';
console.log(stringaConc);

// Si possono anche concatenare delle variabili alle stringhe
let myName = 'Milo';
let miPresento = "Ciao! Mi chiamo " + myName + ". Tu come ti chiami?";
console.log(miPresento);

// Si possono anche ottenere delle stringhe concatenando solo le variabili che contengono stringhe
let aggettivo = "fantastico";
let intro = 'JavaScript è ';
console.log(intro += aggettivo);

// È possibile calcolare la lunghezza di una stringa utilizzando la proprietà .length
let firstNameLength = 0;
let firstName = 'Milo';

firstNameLength = firstName.length;
console.log(firstNameLength);
console.log(typeof firstNameLength);

// Se volessimo trovare la prima lettera di una stringa possiamo utilizzare la bracket notation. Essendo le stringhe 0-based, la prima posizione è 0 e non 1.
let firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

// È possibile ricavare l'ultimo carattere di una stringa anche se non se ne conosce la lunghezza esatta
let nome = 'Allen';
let lastLetterOfNome = nome[nome.length - 1]; // -1 perchè si parte a contare da 0
console.log(lastLetterOfNome);

/* ----------------------------- Metodi stringhe ---------------------------- */
let txt = "Oggi ho svolto 8 ore di lezione";

// Metodi di ricerca
let search1 = txt.indexOf('lezione'); // restituisce l'indice in cui la parola inizia
console.log(search1);

let search2 = txt.lastIndexOf('e'); // restituisce l'indice dell'ultima occorrenza
console.log(search2);

let search3 = txt.charAt(3); // restituisce il carattere a quell'indice
console.log(search3);

let search4 = txt.indexOf('f'); // se il carattere non esiste restituisce -1
console.log(search4);

// Metodi per il taglio
let testo = "Sono le 5 e tutto va bene";

// I metodi slice() e substring() estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale
let taglio1 = testo.slice(4, 10);
console.log(taglio1);

let taglio2 = testo.substring(4, 10);
console.log(taglio2);

// Metodi per sostituzione
let affermazione = "Il miglior browser del mondo è Internet Explorer";

// il metodo replace() restituisce una nuova stringa rimpiazzando tutte le ricorrenze del patter dato
let sost = affermazione.replace('Internet Explorer', 'Google Chrome');
console.log(sost);

// il metodo toUpperCase() converte tutti i caratteri in maiuscolo
let upp = affermazione.toUpperCase();
console.log(upp);

// il metodo toLowerCase() converte tutti i caratteri in minuscolo
let low = affermazione.toLowerCase();
console.log(low);

// Il metodo split() divide una stringa in una lista ordinata di sotto-stringhe, le raggruppa in un array.La divisione avviene cercando un pattern fornito come parametro tra le parentesi tonde e indica dove il metodo deve andare a separare.
let string1 = "Ciao mi chiamo Milo!";

let arr1 = string1.split(' ');
console.log(arr1);

// Se si parte da un array i stringhe, con il metodo join() è possibile ottenere una stringa unica che concatena tutti gli elementi dell'array separati da virgole oppure dal carattere specificato come parametro del metodo
let arr2 = ['M', 'i', 'l', 'o'];

let string2 = arr2.join('');
console.log(string2);

/* -------------------------------------------------------------------------- */
/*                                  Esercizi                                  */
/* -------------------------------------------------------------------------- */

/* ------------------------------- esercizio 1 ------------------------------ */
// Salvare un nome in una variabile e stamparlo in console senza l'iniziale
let mioNome = "Davide";
console.log(mioNome.substring(1));

/* ------------------------------- esercizio 2 ------------------------------ */
// Data una stringa, stamparla in console al contrario
// Punti in più se risolta in 2 righe max, compreso il console.log
let stringaEsempio = 'Ecco delle belle docce';
let fraseAlContrario = stringaEsempio.split("").reverse().join("");
console.log(fraseAlContrario);

/* ------------------------------- esercizio 3 ------------------------------ */
/* 
    Elabora uno script per estrarre l'estensione di un file
    "immagineBG.jpg" -> "L'estensione del file è: jpg"
    "testoSito.docx" -> "L'estensione del file è: docx"
*/
let nomeFile = "immagine.jpg";
let estensione = nomeFile.split('.').pop();
console.log("L'estensione del file è: " + estensione);

/* ------------------------------- esercizio 4 ------------------------------ */
/*
    FACOLTATIVO
    Elabora uno script per fare la seguente manipolazione:
    oggi sono a lezione -> Oggi Sono A Lezione
    Uppercase della prima lettera di ogni singola parola
*/
let frase = "oggi sono a lezione fino alle nove";

let fraseArray = frase.split(' ');
console.log(fraseArray);
let nuovaFrase = "";

for (let i = 0; i < fraseArray.length; i++) {
    let inizialeMaius = fraseArray[i][0].toUpperCase();
    let restoParola = fraseArray[i].substring(1);
    nuovaFrase += inizialeMaius + restoParola + " ";
}

console.log(nuovaFrase);