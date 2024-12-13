/* 
    Ora che possiamo creare quanti oggetti User vogliamo, ognuno con le sue proprietà, sarebbe bello fare in modo che abbiano anche dei metodi.

    Per definire i metodi all'interno di una classe, non lo facciamo dentro la funzione costruttore, ma subito fuori
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

const userOne = new User('mario', 'mario@mail.com');
const userTwo = new User('luigi', 'luigi@mail.com');

console.log(userOne, userTwo);
userOne.login();
userOne.logout();

// Al momento se volessimo utilizzare un metodo dell'utente e subito dopo usarne un altro, dovremmo per forza scrivere due statement uno dopo l'altro
userTwo.login();
userTwo.logout();

// Sarebbe bello poter concatenare i metodi in questa maniera, ma non potevamo farlo, perché i due metodi non ci restituivano alcun valore. Quando non specifichiamo cosa deve restituire un metodo, di default restituirà undefined e non possiamo chiamare un metodo su undefined.
// La soluzione è di far restituire ai metodi l'oggetto stesso, così che noi possiamo concatenare altri metodi che verranno lanciati su ciò che viene restituito dal metodo precedente.
userOne.login().increaseScore().increaseScore().increaseScore().logout();