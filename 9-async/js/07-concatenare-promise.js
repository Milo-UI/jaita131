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

getTodos('db/todos/milo.json')
    .then(data => {
        console.log('Promise 1 risolta:', data);

        // getTodos() ci restituisce una promise, quindi ne creo un'altra
        return getTodos('db/todos/mario.json');
    })
    .then(data => { // questo then fa riferimento alla seconda promise
        console.log('Promise 2 risolta:', data);

        return getTodos('db/todos/yoshi.json');
    })
    .then(data => {
        console.log('Promise 3 risolta:', data);
    })
    .catch(err => { // catch intercetta qualsiasi errore di qualsiasi then
        console.log('Promise rifiutata:', err);
    });