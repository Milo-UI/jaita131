/*
     Negli array possiamo salvare valori di tutti i tipi, quindi possiamo anche creare array di oggetti.

     Quando otteniamo dati da un database, nella maggior parte dei casi riceveremo array di oggetti. Per esempio, se richiediamo a un DB una lista di film, questo ci restituirà un array di oggetti film, che avranno le loro proprietà (titolo, durata, anno, attori, resgista, ecc.).
*/

const posts = [{
        title: 'Perché saltare in testa ai Goomba?',
        likes: 30
    },
    {
        title: 'Come salvare una principessa in 10 passi',
        likes: 500
    }
];

console.log(posts);

let user = {
    nome: 'Mario',
    eta: 30,
    email: 'mario@idraulico.it',
    paese: 'Italia',
    post: [{
            title: 'Perché saltare in testa ai Goomba?',
            likes: 30
        },
        {
            title: 'Come salvare una principessa in 10 passi',
            likes: 500
        }
    ],

    login: function() {
        console.log("L'utente è loggato");
    },
    logout: function() {
        console.log("L'utente non è loggato");
    },
    stampaPost() {
        console.log('Questo utente ha scritto i seguenti post:');

        this.post.forEach(post => {
            console.log(`"${post.title}" - ${post.likes} likes`);
        });
    }
};

user.stampaPost();