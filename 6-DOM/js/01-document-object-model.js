// console.log(document);

// Seleziono l'elemento con ID 'demo'
let demo = document.getElementById('demo');

// Modificare il contenuto dell'elemento
// demo.innerHTML = 'IL MIO TESTO È CAMBIATO!!!';

// Modificare il contenuto dell'elemento al click di un bottone
function cambiaTesto() {
    demo.innerHTML = 'IL MIO TESTO È CAMBIATO!!!';
}

let btn = document.getElementById('btn');

// Faccio in modo che il bottone registri l'azione di click dell'utente per poter lanciare la funzione
btn.addEventListener('click', cambiaTesto);