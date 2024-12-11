const userOne = {
    username: 'yoshi',
    email: 'yoshi@mushroomkingdom.com',

    login() {
        console.log('Utente loggato');
    },
    logout() {
        console.log('Utente non loggato');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

// Come facciamo a creare un nuovo oggetto userTwo? Possiamo copiare e incollare userOne e cambiare ciò che vogliamo
const userTwo = {
    username: 'luigi',
    email: 'luigi@mushroomkingdom.com',

    login() {
        console.log('Utente loggato');
    },
    logout() {
        console.log('Utente non loggato');
    }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

// e se volessimo un terzo utente? Inizia a essere una bella ripetizione di codice, soprattuto perché i metodi sono uguali e le proprietà sono le stesse, cambiano solo i valori. Se dovessimo crearne davvero tanti, questo approccio non è molto efficiente

// Sarebbe comodo poter fare come abbiamo visto per esempio con Error, XMLHttpRequest, String
const userThree = new User('mario', 'mario@mushroomkingdom.com');
// Non esiste una funzione costruttore per User, ma possiamo crearla noi!