/*
    async e await sono due parole chiave introdotte recentemente che ci permettono di concatenare tra loro delle Promise in maniera facile e leggibile.

    Possiamo mettere tutto il nostro codice asincrono all'interno di una funzione asincrona e usare la parola chiave await all'interno per concatenare le promise.
*/
const getTodos = async () => {

    // La fetch restituisce una Promise e la parola chiave await ferma JS in modo da assegnare il valore alla variabile response solo quando la Promise si risolve
    const response = await fetch('db/todos/yoshi.json');
    console.log(response);

    // La response non ci resttituisce ancora i datti, dobbiamo quindi usare il metodo json() che ci reestituisce a sua volta una Promise. Quindi utilizziamo di nuovo await
    const data = await response.json();

    // Possiamo concatenare quante Promise vogliamo
    const response2 = await fetch('db/todos/mario.json');
    const data2 = await response2.json();

    const response3 = await fetch('db/todos/milo.json');
    const data3 = await response3.json();

    return [data, data2, data3];
};

console.log(1);
console.log(2);

// Quando richiamiamo una funzione asincrona, ci viene sempre restituita una Promise
getTodos()
    .then(([data, data2, data3]) => console.log('Risolta:', data, data2, data3));

console.log(3);
console.log(4);