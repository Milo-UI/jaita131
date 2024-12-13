/*
    Se la sottoclasse non riporta una funzione costruttore, allora prenderà quella della classe che estende.
    Ma se volessimo aggiungere delle proprietà solo a Admin che la classe estesa di User non ha, dobbiamo creare una funzione costruttore anche dentro la sottoclasse.
*/
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(`${this.username} ha effettuto il login`);
        return this;
    }

    logout() {
        console.log(`${this.username} ha effettuto il logout`);
        return this;
    }

    increaseScore() {
        this.score++;
        console.log(`${this.username} ha un punteggio di ${this.score}`);
        return this;
    }
}

class Admin extends User {
    // Siccome definisco un costruttore, verrà preso in considerazione questo e non quello di User
    constructor(username, email, title) {
        // Chiediamo di eseguire il costruttore di User con super() che va a recuperarlo e gli passa le proprietà che vogliamo
        super(username, email);
        this.title = title;
    }

    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
}

const userOne = new User('mario', 'mario@mail.com');
const userTwo = new User('luigi', 'luigi@mail.com');
const userThree = new Admin('milo', 'milo@mail.com', 'Admin');

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];