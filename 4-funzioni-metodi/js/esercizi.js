/*
    ES1
    Scrivi una funzione che accetti due argomenti: una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa
*/
let contaOccorrenze = function(stringa, lettera) {
    if (lettera.length !== 1) {
        return "Devi fornire una lettera!"
    }

    let conteggio = 0;

    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] == lettera) {
            conteggio++;
        }
    }

    return `La lettera "${lettera}" si ripete ${conteggio} volte nella parola "${stringa}"`;
};

console.log(contaOccorrenze("banana", "a"));

/*
    Es2 
    Scrivi una funzione che accetta un argomento e restituisce il tipo di dato: oggetto, funzione, stringa, numero, undefined, null...
*/
function trovaTipoDato(dato) {
    if (dato === null) {
        return "Questo dato è di tipo null";
    }

    let tipo = typeof dato;

    return `Questo dato è di tipo ${tipo}`;
}

console.log(trovaTipoDato(42));
console.log(trovaTipoDato('Ciao'));
console.log(trovaTipoDato(null));
console.log(trovaTipoDato(undefined));
console.log(trovaTipoDato(trovaTipoDato));
console.log(trovaTipoDato({}));

/*
    Es3
    Scrivi una funzione che accetta una stringa come parametro e trova la prola più lunga all'interno della frase. Es.: "Mi chiamo Massimiliano" -> Massimiliano
*/
function trovaParolaLunga(stringa) {
    let parole = stringa.split(' ');

    // let indiceParola = 0;

    // for (let i = 0; i < parole.length; i++) {
    //     if (parole[i].length > parole[indiceParola].length) {
    //         indiceParola = i;
    //     }
    // }

    // return parole[indiceParola];

    let parolaLunga = '';

    parole.forEach(parola => {
        if (parola.length > parolaLunga.length) {
            parolaLunga = parola;
        }
    });

    return parolaLunga;
}

let prova = 'Mi chiamo Massimiliano, molto piacere';
console.log(trovaParolaLunga(prova));

/*
    Es4
    Scrivi un programma che accetta (da finestra) un numero come input e inserisce un dash (-) tra due numeri pari. Es 823486 -> 8-234-8-6
*/
// let numero = prompt('Inserisci un numero');
let numero = 823486;

function aggiungiDash(numero) {
    let numeroStringa = numero.toString();
    // let arrayNumeri = numeroStringa.split('');
    let risultato = '';

    // for (let i = 0; i < arrayNumeri.length - 1; i++) {
    //     if (arrayNumeri[i] % 2 == 0 && arrayNumeri[i + 1] % 2 == 0) {
    //         arrayNumeri.push('-');
    //     }
    // }

    for (let i = 0; i < numeroStringa.length; i++) {
        risultato += numeroStringa[i];

        let cond1 = numeroStringa[i] % 2 == 0;
        let cond2 = numeroStringa[i + 1] % 2 == 0;
        let cond3 = i < numeroStringa.length - 1;

        if (cond1 && cond2 && cond3) {
            risultato += '-';
        }
    }

    return risultato;
}

console.log(aggiungiDash(numero));

/*
    Es5
    Scrivi una funzione che rimuova gli elementi duplicati da un array
*/
function eliminaDuplicati(array) {
    let senzaDuplicati = [];

    for (let i = 0; i < array.length; i++) {
        // Controlla se l'elemento non è già presente nel nuovo array
        if (!senzaDuplicati.includes(array[i])) {
            //     // Aggiunge l'elemento se non è duplicato
            senzaDuplicati.push(array[i]);
        }

        // Se volessimo rimuovere completamente i numeri che si ripetono:
        // let duplicato = false;

        // for (let j = 0; j < array.length; j++) {
        //     if (array[i] == array[j] && i != j) {
        //         duplicato = true;
        //     }
        // }

        // if (!duplicato) {
        //     senzaDuplicati.push(array[i])
        // }
    }

    return senzaDuplicati;
}

let arrayOriginario = [1, 2, 2, 3, 4, 4, 5];
let arraySenzaDuplicati = eliminaDuplicati(arrayOriginario);
console.log(arraySenzaDuplicati);

/*
    Es6
    Dati due array, calcolare la somma degli elementi presenti nello stesso indice.
    Esempio:
    array1 = [1,0,2,4,6]
    array2 = [0,4,5,8,7]
    Output = [1,4,7,12,13]
*/
function sommaArray(array1, array2) {
    let somma = [];

    // let lunghezza = Math.min(array1.length, array2.length)

    for (let i = 0; i < array1.length; i++) {
        // somma[i] = array1[i] + array2[i];
        somma.push(array1[i] + array2[i]);
        // console.log(array2[i]);
    }

    return somma;
}

let array1 = [1, 0, 2, 4, 6];
let array2 = [0, 4, 5, 8, 7];
let arrayUniti = sommaArray(array1, array2);
console.log(arrayUniti);

/*
    Es7
    Scrivi una funzione che stampa a console tutti i numeri interi di un dato intervallo. Per i multipli di 3 stamperà *Zoom! mentre per i multipli di 5 stamperà *Boom!. Controlla anche il caso in cui il numero è divisibile sia per 3 che per 5.
*/
function stampaZoomBoom(inizio, fine) {
    for (let i = inizio; i <= fine; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("*Zoom!");
        } else if (i % 5 === 0) {
            console.log("*Boom!");
        } else if (i % 3 === 0) {
            console.log("*ZoomBoom!");
        } else {
            console.log(i);
        }
    }
}

stampaZoomBoom(0, 100);