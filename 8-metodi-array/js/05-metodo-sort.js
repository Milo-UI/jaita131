/*
    Potreste voler organizzare o riordinare un array di dati in un modo particolare (ordine alfabetico, ordine crescente, da chi ha il punteggio più alto in giù, ecc) e per farlo usiamo sort().
    È un metodo distruttivo, quindi agisce sull'array originale.
*/

/* ---------------------------- ordinare stringhe --------------------------- */
const nomi = ['mario', 'yoshi', 'luigi', 'peach', 'bowser'];

// sort() di default riarrangia l'array in ordine alfabetico
nomi.sort(); // Non restituisce un nuovo valore, ma cambia quello originale

console.log(nomi);

/* ----------------------------- ordinare numeri ---------------------------- */
const punteggi = [10, 50, 20, 5, 35, 70, 45];

// Senza specificare nulla, tiene in cosiderazione solo il primo numero della cifra
// punteggi.sort();

// Ordinare dal più grande al più piccolo
punteggi.sort((a, b) => b - a);

// Ordinare dal più piccolo al più grande
punteggi.sort((a, b) => a - b);

console.log(punteggi);

/* 
    Valore positivo: b precede a.
    Valore negativo: a precede b.
    Zero: nessun cambiamento nell'ordine.
*/
punteggi.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1
    } else {
        return 0
    }
}) 