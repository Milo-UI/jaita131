/*
    getElementById() recupera un elemento tramite il suo id e non ha bisogno di un argomento scritto con la sintassi CSS, basta una stringa contenente il nome dell'id.
*/
let title = document.getElementById('title'); // non scrivo #title

console.log(title);

/* ------------------------------- meno usati ------------------------------- */

/*
    getElementsByClassName() recupera tutti gli elementi che hanno la classe specificata tra parentesi.
    Questo metodo non ci restituisce una NodeList come querySelectorAll(), ma una HTMLCollection. Sono simili, ma non identiche:
        - possiamo usare la bracket notation
        - NON possiamo usare il metodo forEach()
*/
let errors = document.getElementsByClassName('error');

console.log(errors);
console.log(errors[0]);

// errors.forEach(err => {
//     console.log(err);
// });

/*
    getElementsByTagName() recupera tutti gli elementi del tag specificato come argomento del metodo.
    Anche questo ci restituirà una HTMLCollection.
*/
let paras = document.getElementsByTagName('p');

console.log(paras);
console.log(paras[2]);