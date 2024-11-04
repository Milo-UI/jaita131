/* 
    Quando lavoriamo sul DOM e editiamo, cambiamo o eliminiamo contenuti da una pagina web, il primo passo da fare è decidere quale elemento vogliamo selezionare, per aggiungergli/rimuovergli contenuti o per cambiarlo in qualche modo, ed 'entrare' nel DOM per ottenere un riferimento a quell'elemento. Questo è chiamato 'querying the DOM.'

    Salvando in una variabile il riferimento all'elemento HTML che ci interessa, possiamo poi farne ciò che vogliamo. Per farlo richiamiamo l'oggetto document e usiamo il metodo querySelector().

    querySelector() va a recuperare la prima occorrenza dell'elemento selezionato tramite il selettore passatogli come argomento e scritto con sintassi CSS.
*/
// Recuperiamo il primo <p> che incontriamo nel documento
let paragrafo = document.querySelector('p');

console.log(paragrafo);

// Se volessimo un <p> specifico a cui è stata assegnata una classe:
let errorMessage = document.querySelector('.error');

console.log(errorMessage);

// Se volessimo un altro elemento che non sia un <p>, ma che abbia anch'esso la classe .error:
let errorMessage2 = document.querySelector('div.error');

console.log(errorMessage2);

/*
    Se però volessimo selezionare tutti gli elementi <p> presenti nella pagina, dovremmo ricorrere al metodo querySelectorAll().
    Questo metodo crea un riferimento a una NodeList che conterrà tutti gli elementi <p> della pagina.

    Una NodeList assomiglia molto a un array, ma non lo è. Però possiamo utilizzare la bracket notation per selezionare un determinato elemento al suo interno (0 based).
*/
let paragrafi = document.querySelectorAll('p');

console.log(paragrafi);
console.log(paragrafi[1]);
console.log(paragrafi[1].innerHTML);

paragrafi.forEach(paragrafo => {
    console.log(paragrafo);
});

let errori = document.querySelectorAll('.error');

console.log(errori);