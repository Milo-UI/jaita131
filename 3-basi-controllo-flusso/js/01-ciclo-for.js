/*
    Il ciclo for è un loop che esegue un blocco di codice per un numero determinato di volte deciso dalla sua condizione.
    La sintassi:
        - Parola chiave for
        - parentesi tonde che contengono gli elementi necessari per porre la condizione:
            - inizializzazione di una variabile
            - condizione per cui la variabile è vera o falsa
            - aggiornamento della variabile
        - parentesi graffe che contengono il blocco di codice da eseguire finché la condizione viene rispettata
*/
for (let i = 0; i < 5; i++) {
    console.log(`In loop: ${i}`);
}

console.log('Loop finito!');

// Difficilmente la condizione conterrà un numero fisso come il 5 qua sopra, il più delle volte cicleremo dei dati di qualche tipo.
const students = ['Erica', 'Sam', 'Michele'];
let elStudents = document.getElementById('studenti');

for (let i = 0; i < students.length; i++) {
    // console.log(i);
    // console.log(students[i]);
    elStudents.innerHTML += `<li>${students[i]}</li>`
}

/* -------------------------------------------------------------------------- */
/*                                  ESERCIZI                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- esercizio 1 ------------------------------ */
/* 
    Scrivi un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari. Mostra il risultato in console
*/

/* ------------------------------- esercizio 2 ------------------------------ */
/*
    Scrivi un programma per costruire in console il seguente pattern:
     *
    * *
   *   *
  *     *
 * * * * * 
*/

/* ------------------------------- esercizio 3 ------------------------------ */
/*
    Scrivi un programma che stampi in console un pattern come il seguente triangolo, chiedendo all'utente il numero di righe tramite un prompt:
    1
    12
    123
    1234
    12345
*/