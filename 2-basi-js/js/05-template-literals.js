/*
    Per non incorrere in errori, problemi di concatenazione tra stringhe e numeri e per semplificarci il lavoro, possiamo utilizzare i template literal (o template string o stringhe template).
    Questi ci permettono di iniettare variabili direttamente nella stringa senza doverne uscire per concatenarle con l'operatore +

    Per utilizzarli, invece di usare apici doppi o singoli, scriviamo la stringa all'interno di una coppia di backtick. Se vogliamo inserire all'interno della stringa una variabile, ci basta richiamarla all'interno di parentesi graffe precedute dal simbolo del dollaro 
    ${nomeVariabile}
*/
let title = "I giochi migliori del 2024";
let author = "Allen";
let likes = 30;

// metodo concatenazione
let conc = "L'articolo si chiama '" + title + "', è stato scritto da " + author + " e finora ha raggiunto " + likes + " like.";
console.log(conc);

// template literal
let template = `L'articolo si chiama "${title}", è stato scritto da ${author} e finora ha raggiunto ${likes} like.`;
console.log(template);

// I template literal sono perfetti per creare dei template HTML con contenuti dinamici
let htmlTemplate = `
    <h2>${title}</h2>
    <p>Autore: ${author}</p>
    <span>Questo articolo ha ${likes} like</span>
`;

console.log(htmlTemplate);
document.write(htmlTemplate);