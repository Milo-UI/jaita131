/*
    I form esistono per ottenere dati o informazioni da parte degli utentiu della pagina web (es.: username e password in un form di login).

    Per catturare queste informazioni, utilizzeremo degli eventi e più nello specifico, l'evento 'submit' dei form. Cliccare sul bottone presente al fondo di un form fa partire un evento di submit.

    Per catturare un evento di submit, anche se per lanciarlo l'utente deve cliccare sul bottone, dobbiamo "ascoltarlo" sul form. Anche perché il submit può avvenire senza il click sul bottone, ma al semplice premere invio dell'utente.

    L'azione di default che il submit di un form compie è il refresh della pagina. Noi raramente vogliamo che questo accada, quindi usiamo il metodo preventDefault() dell'evento per evitare la sua azione di default.
*/
const form = document.querySelector('.signup-form');

// const inputUsername = document.querySelector('#username');

form.addEventListener('submit', e => {
    // Impediamo all'evento submit di refreshare la pagina
    e.preventDefault();
    // console.log(inputUsername.value);

    // Dot notation sul form per prendere l'input con l'attributo id o l'attributo name che ci interessa
    console.log(form.username.value);
});