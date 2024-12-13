/*
    Ora che abbiamo la possibilità di creare il nostro oggetto User, assegnandogli proprietà con la funzione costruttore e metodi tramite il suo prototipo, potremmo voler creare l'oggetto Admin.

    Con le classi far ereditare metodi e parametri a una sottoclasse è facile, ma come facciamo senza classi?

    Abbiamo intanto bisogno di un costruttore per Admin.
*/
function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function() {
    console.log('Utente loggato');
    return this;
};

User.prototype.logout = function() {
    console.log('Utente non loggato');
    return this;
}

function Admin(username, email, title) {
    // this.username = username;
    // this.email = email;
    // Senza le classi non abbiamo accesso alla funzione super(), quindi per prenderci il costruttore di User dobbiamo usare il metodo call().
    // Il metodo call() viene usato sulla funzione costruttore User per richiamarla, e richiede come argomenti la parola chiave this, per indicare il nuovo oggetto che stiamo creando, e tutti i parametri che ci interessano, i quali verranno assegnati a this, ovvero al new Admin
    User.call(this, username, email);

    // Aggiungiamo le proprietà proprie solo di Admin
    this.title = title;
}

// Adesso Admin esiste e ha tutte le proprietà che vogliamo, ma non possiede i metodi di User. Quindi dobbiamo settare il prototype di Admin in modo che sia uguale a quello di User.
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function() {
    // cancella utente
}

const userOne = new User('milo', 'milo@mail.com');
const userTwo = new Admin('link', 'link@mail.com', 'Admin');

console.log(userOne, userTwo);