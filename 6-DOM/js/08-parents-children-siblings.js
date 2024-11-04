/*
    Non sempre siamo noi a scrivere o a generare l'HTML di una pagina web, quindi è bene imparare come selezionare gli elementi che ci interessano grazie al loro rapporto di parentela con gli altri elementi.

    parent      <article>
                ____|_____________________
                  |    |    |    |    |
    children    <h2>  <p>  <p>  <p> <div>
                        siblings
*/

/* ----------------------------- parent -> child ---------------------------- */
// Mi serve una selezione di tutti gli elementi all'interno di <article> (parent) così da poter assegnare a ognuno (children) una classe.

// Creo un riferimento al parent
let article = document.querySelector('article');

console.log(article);

// Potrei recuperare tutti i figli dell'elemento genitore con la proprietà children, ma questo ce li salva in una HTMLCollection sulla quale non possiamo usare il metodo forEach()
console.log(article.children);

// Posso trasformare la HTMLCollection in un Array
console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

/* ----------------------------- child -> parent ---------------------------- */
// Posso anche recuperare un elemento partendo da uno dei suoi figli
let articleTitle = document.querySelector('h2');

console.log(articleTitle.parentElement); // <article> genitore di <h2>
console.log(articleTitle.parentElement.parentElement); // <main> genitore di <article>

/* -------------------------------- siblings -------------------------------- */
// Prendo l'elemento successivo alla stessa altezza dell'alberatura
console.log(articleTitle.nextElementSibling); // il fratello che viene dopo <p>

// Prendo l'elemento precedente alla stessa altezza dell'alberatura
console.log(articleTitle.previousElementSibling); // null perché <h2> è il primo