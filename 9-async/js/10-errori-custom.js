/*
    Possiamo lanciare errori custom nelle nostre funzioni asincrone.

    Se c'è un errore nel JSON il catch lo troca e lo capisce, ma se l'errore è nella fetch, abbiamo visto che non viene lanciato alcun errore, perché la Promise viene risolta comunque. Otteniamo un errore in seguito quando cerchiamo di parsare il nulla.

    Quindi dobbiamo controllare manualmente che la response abbia uno status di 200 per essere sicuri che vada tutto a buon fine. In caso contrario "lanciamo" un errore con la parola chiave throw seguita dalla creazione di un nuovo oggetto errore. Questo verrà intercettato dal catch().
*/
const getTodos = async () => {

    const response = await fetch('db/todos/yoshis.json');

    if (response.status !== 200) {
        throw new Error('Non sono riuscito a fetchare i dati');
    }

    const data = await response.json();

    return data;
};

getTodos()
    .then(data => console.log('Risolta:', data))
    .catch(err => console.log('Rifiutata:', err.message));