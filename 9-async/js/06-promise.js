/*
    Una Promise è un qualcosa che rappresenta un'operazione asincrona (che quindi ci mette del tempo a risolversi) e il suo eventuale completamento (o fallimento) nel futuro.

    Una Promise può trovarsi in uno dei seguenti tre stati:

    - Pending (in attesa): Lo stato iniziale, né completato né rifiutato.
    - Fulfilled (completato): L'operazione è stata completata con successo.
    - Rejected (rifiutato): L'operazione è fallita.
*/
const getTodos = (risorsa) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Non sono riuscito a recuperare i dati :(');
            }
        });

        request.open('GET', risorsa);
        request.send();
    });
};

console.log('Log 1');
console.log('Log 2');

getTodos('db/todos/milos.json')
    .then(data => {
        console.log('Promise risolta:', data);
        // console.log(data[0].autore);
        // Qui crei tutto quello che ti serve per far vedere i dati
    })
    .catch(err => {
        console.log('Promise rifiutata:', err);
    });

console.log('Log 3');
console.log('Log 4');

// Esempio Promise
// const getQualcosa = () => {
//     // La Promise accetta come parametro una funzione che a sua volta ci dà accesso a altri due parametri: resolve e reject. Questi parametri sono funzioni già presenti all'interno della Promise
//     return new Promise((resolve, reject) => {
//         // Recuperiamo qualcosa
//         resolve('Dati recuperati'); // Nella resolve passiamo i dati recuperati
//         // reject('Errore'); // Nella reject passiamo l'errore nel caso si presenti
//     });
// };

// Richiamando la funzione restituiamo la Promise, che dice "farò qualcosa a un certo punto che potrà risolversi o venir rifiutato." Quindi utilizziamo il metodo then() per dire cosa deve succedere quando la Promise si risolve e prende come parametro due funzioni. La prima nel caso in cui la promise si risolve e la seconda in caso venga rifiutata.
// getQualcosa().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// Esiste un metodo più chiaro per scrivere tutto questo utilizzando catch() che partirà nel caso in cui la promise venga rifiutata
// getQualcosa()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));