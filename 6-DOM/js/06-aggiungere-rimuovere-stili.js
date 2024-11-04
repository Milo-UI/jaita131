/*
    Utilizzando setAttribute() possiamo cambiare il valore di un attributo, ma se ad esempio si tratta di un attributo style già esistente, andremmo a sovrascrivere il valore presente nell'HTML. Per evitare questo problema, dovremmo andare a controllare qual è il valore e riportarlo nel momento in cui apportiamo la modifica, ma non è una cosa pratica.

    Possiamo quindi sfruttare la proprietà style
*/
let title = document.querySelector('h2');

// title.setAttribute('style', 'font-size: 40px;');

console.log(title.style);
console.log(title.style.color);

title.style.fontSize = '40px';
title.style.color = 'salmon';
title.style.textAlign = 'center';
title.style.textAlign = '';
title.style.borderColor = 'salmon';