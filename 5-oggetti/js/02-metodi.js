/* 
    I metodi di un oggetto sono funzioni che sono associate a quell'oggetto.

    Questi metodi possono essere utilizzati per eseguire operazioni specifiche relative all'oggetto stesso. Vengono definiti come parte dell'oggetto e possono accedere alle altre proprietà dell'oggetto.

    THIS
    La parola chiave this è un "oggetto contestuale," cioè rappresenta il contesto nel quale il codice in cui si trova viene eseguito. All'interno di un oggetto creato da noi, farà riferimento all'oggetto stesso. Quindi il suo valore cambia in base a dovbe viene usata. Per esempio, se usata in contestto globale, farà riferimento all'oggetto globale, che nel caso di un browser è window
*/
let user = {
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    post: ['Perché saltare in testa ai Goomba?', 'Come salvare una principessa in 10 passi'],

    // metodi
    login: function() {
        console.log("L'utente è loggato");
    },
    logout: function() {
        console.log("L'utente non è loggato");
    },
    // Possiamo anche abbreviare i metodi con questa sintassi
    stampaPost() {
        // console.log(post); // Restituisce errore
        // console.log(this.post);
        console.log('Questo utente ha scritto i seguenti post:');
        this.post.forEach(post => {
            console.log(post);
        });
    }
};

user.login();
user.logout();

user.stampaPost();

user.presentati = function() {
    console.log(`Mi chiamo ${this.nome}`);
}

user.presentati();

// this in contesto globale
console.log(this);