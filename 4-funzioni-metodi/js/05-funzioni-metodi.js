/*
    La differenza tra metodi e funzioni è principalmente legata al contesto in cui vengono utilizzati.

    Una funzione è un blocco di codice progettato per eseguire un'operazione specifica. Può essere definita  e richiamata in modo indipendente. Le funzioni possono essere chiamate in qualsiasi punto del codice e non legate a nessun oggetto specifico

    Un metodo è una funzione che è associata a un oggetto (o a un data type). In altre parole, è una funzione che è una proprietà di un oggetto. Quindi i metodi vengono chiamati in relazione all'oggetto a cui appartengono tramite la dot notation

    Le differenze principali:
        - come vengono richiamati
        - come vengono definiti
*/
let nome = 'milo';

// Funzioni
const saluta = () => `Ciao ${nome}`;

let risultato1 = saluta();
console.log(risultato1);

// Metodi
let risultato2 = nome.toUpperCase();
console.log(risultato2);