/*
    Siccome non è consigliabile lavorare sullo stile in line (tranne che per alcune eccezioni), è meglio imparare come fare ad aggiugnere e rimuovere classi CSS.

    La proprietà classList ci permette di vedere l'elenco di classi di un dato elemento HTML.

    Per aggiungere una classe, possiamo utilizzare il metdo di classList add().

    Per rimuovere una classe, possiamo utilizzare il metodo di classList remove().
*/
let content = document.querySelector('p');

console.log(content.classList);

// // Aggiungo la classe error
// content.classList.add('error');

// // Rimuovo la classe erro
// content.classList.remove('error');

// // Aggiungo la classe success
// content.classList.add('success');

/*
    Recupera tutti gli elementi <p> della pagina e se contengono la parola success, assegnagli la classe success, altrimenti, se contengono la parola error, assegnagli la classe error.
*/

let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    // textContent ci prende tutto il testo, a differenza di innerText che ignorerebbe il testo nascosto (a cui magari è stato dato display: none)
    if (paragraph.textContent.includes('error')) {
        paragraph.classList.add('error')
    }

    if (paragraph.textContent.includes('success')) {
        paragraph.classList.add('success')
    }
});

let title = document.querySelector('h1');

title.classList.toggle('test');