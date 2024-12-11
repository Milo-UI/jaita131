/*
    Quando abbiamo bisogno di salvare qualcosa di più complesso di semplici stringhe o numeri, visto che la local storage lavora solo con le stringhe, dobbiamo prima trasformarlo in una stringa.
    A quel punto possiamo salvare i nostri dati nella local storage fino a quando non ne avremo bisogno. Quando li recuperiamo riceviamo una stringa, quindi dobbiamo parsarla in qualcosa con cui possiamo lavorare in JS, come un array o un oggetto.
*/
const todos = [{
        testo: 'Giocare a MarioKart',
        autore: "Milo"
    },
    {
        testo: 'Salvare Peach',
        autore: "Mario"
    },
    {
        testo: 'Mangiare frutta',
        autore: "Yoshi"
    }
];

// Per salvare questo array di oggetti in local storage, dobbiamo prima trasformarlo in una stringa. Per farlo utilizziamo il metodo stringify() dell'oggetto JSON.
console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

// Ora possiamo recuperare dalla local storage il nosto JSON e convertirlo di nuovo da una stringa in un array con il metodo parse()
const todosSalvati = localStorage.getItem('todos');
console.log(JSON.parse(todosSalvati));