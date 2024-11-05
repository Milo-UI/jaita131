/*
    Quando un eventi viene attivato su un elemento, l'evento si propaga "risalendo" attraverso la gerarchia degli elementi genitori.

    - Attivazione dell'evento
    Quando un evento, come un click, si verifica su un elemento, l'evento inizia a propagarsi dal target dell'evento (l'elemento cliccato) fino all'elemento radice del documento.

    - Popagazione
    Durante la fase di bubbling, l'evento viene passato a ciascun elemento genitore, in ordine gerarchico, fino a raggiungere l'elemento document.

    - Gestione degli eventi
    Ogni elemento lungo il percorso può avere dei gestori di eventi associati. Se un  gestore di eventi è definito su un elemento genitore, può "catturare" l'evento e reagire a esso.
*/

let todoList = document.querySelector('.lista');

let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = 'Nuova cosa da fare';
    todoList.prepend(li);
});

let listItems = document.querySelectorAll('.lista li');

// Qui aggiungiamo un eventListener su ogni elemento della lista. Questo è un dispendio di memorioa e potrebbe portare a arallentamenti. In più non funziona sugli elementi che aggiungiamo dopo il caricamento della pagina
// listItems.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('Evento su LI');
//         // Impedire all'evento di propagarsi fino al genitore
//         e.stopPropagation();
//         e.target.remove();
//     })
// });

todoList.addEventListener('click', e => {
    // console.log('Evento su UL');
    console.log(e.target); // Controllo che l'evento parta sull'elemento cliccato

    // Se volessimo eliminare l'item cliccato, dobbiamo prima controllare che sia stato cliccato un LI e non l'UL
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});