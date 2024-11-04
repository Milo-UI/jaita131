/*
    Spesso la manipolazione del DOM che attuiamo è conseguente a un'interazione da parte dell'utente con la nostra pagina web, per esempio se l'utente clicca un bottone, fa comparire un menù a scomparsa, o se clicca sull'icona di un cestino, cancellerà qualcosa.
    Abbiamo la possibilità di catturare queste interazioni per gestire la reazione che deve avere il contenuto della pagina

    Queste interazioni si chiamano eventi e per gestirli utilizziamo i "listener" (ascoltatori), che eseguono una funzione specifica quando si verifica un determinato evento.

    Se per esempio volessimo far accarede qualcosa al click di un bottone, ci sono 3 step da seguire:
        - recuperare nel DOM l'elemento dove ci aspettiamo accadrà l'evento
        - aggiungere un eventListener all'elemento
        - scrivere una funzione di callback che parte quando l'utente clicca sul bottone
*/
let btn = document.querySelector('.btn');

// addEventListener() richiede almeno 2 argomenti: quale tipo di evento deve catturare e cosa deve succedere, quindi una callback function
btn.addEventListener('click', () => {
    console.log('Mi hai cliccato');
});

// Adesso voglio fare in modo che al click su un elemento della mia to do list, questo venga sbarrato
let listItems = document.querySelectorAll('.lista li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('fatto');
    })
});