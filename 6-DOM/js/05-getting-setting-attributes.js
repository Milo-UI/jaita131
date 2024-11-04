/*
    Una volta ottenuto un elemento HTML, possiamo anche ottenere o assegnargli degli attributi. Per farlo, sfruttiamo i metodi getAttribute() e setAttribute().

    getAttribute() ci restituisce il valore dell'attributo specificato nell'argomento del metodo.

    setAttribute() ci permette di cambiare il valore di un attributo o di assegnarne uno nuovo. Richiede due argomenti:
        - il nome dell'attributo che ci interessa cambiare o assegnare
        - il valore che vogliamo assegnare all'attributo
*/
let link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute');
link.innerText = 'Vai al sito di MDN e leggi del setAttribute()';

let message = document.querySelector('p');

console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');

// console.log(message.attributes);

/*
    Finora abbiamo cambiato solo attributi che già esistevano nell'HTML, ma possiamo anche crearne di nuovi:
*/
message.setAttribute('style', 'font-weight: bold;')