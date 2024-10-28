/*
    Possiamo fare in modo che le nostre funzioni ci restituiscano un valore, al posto di stampare semplicemente in console
*/
// Es: se avessimo il raggio di un cerchio fornito dall'utente o recuperato da un database e volessimo passarlo a una funzione che calcola l'area del cerchio, ma non volessimo semplicemente stamparla in console, bensì farne qualcosa di più o in seguito, utilizzeremo la parola chiave return
const calcAreaCerchio = function(raggio) {
    let area = 3.14 * raggio ** 2; // Variabile locale, non posso usarla fuori dalla funz
    // console.log(area);
    return area;
};

let areaCalcolata = calcAreaCerchio(5);
console.log(areaCalcolata);

/*
    return è una parola chiave utilizzata all'interno delle funzioni per restituire il valore specificato. Se non viene specificato alcun valore, la funzione restituisce undefined.
    Una volta che il codice incontra una dichiarazione di return, l'esecuzione della funzione si interrompe immediatamente. Qualsiasi riga di codice dopo il return non verrà eseguita.
*/
// Adesso che abbiamo l'area di un cerchio salvata in una variabile, possiamo utilizzarla per calcolarci il volume di un cilindro utilizzando un'altra funzione
const calcVolCilindro = function(area, altezza) {
    return area * altezza;
};

let volCilindro = calcVolCilindro(areaCalcolata, 10);
console.log(volCilindro);

/* --------------------------------- esempio -------------------------------- */
let numeri = [34, 12, 1, 9, 17, 9876, 8];

function trovaPari(numero) {
    if (numero % 2 == 0) {
        return numero;
    } else {
        return null;
    }
}

let listaPari = [];

function eseguiCalcolo(arrayNumeri) {
    for (let i = 0; i < arrayNumeri.length; i++) {
        let numeroPari = trovaPari(arrayNumeri[i]);

        if (numeroPari != null) {
            listaPari.push(numeroPari);
        }
    }

    // console.log(listaPari);
    // stampaNumeriPari(listaPari);
    stampaListaNumeriV2(listaPari, elListaPari);
}

let elListaNumeri = document.getElementById('listaNumeri');
let elListaPari = document.getElementById('listaPari');

// function stampaListaNumeri(listaNumeri) {
//     for (let i = 0; i < listaNumeri.length; i++) {
//         elListaNumeri.innerHTML += `<li>${listaNumeri[i]}</li>`;
//     }
// }

// stampaListaNumeri(numeri);

// function stampaNumeriPari(listaNumeriPari) {
//     for (let i = 0; i < listaNumeriPari.length; i++) {
//         elListaPari.innerHTML += `<li>${listaNumeriPari[i]}</li>`;
//     }
// }

function stampaListaNumeriV2(listaNumeri, elementoUl) {
    for (let i = 0; i < listaNumeri.length; i++) {
        elementoUl.innerHTML += `<li>${listaNumeri[i]}</li>`;
    }
}

stampaListaNumeriV2(numeri, elListaNumeri);
eseguiCalcolo(numeri);