const risposteGiuste = ['B', 'A', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const risultato = document.querySelector('.risultato');

form.addEventListener('submit', e => {
    e.preventDefault();

    const risposteUtente = [form.d1.value, form.d2.value, form.d3.value, form.d4.value, form.d5.value]

    let punteggio = 0;

    // Controlliamo le risposte
    risposteUtente.forEach((risposta, indice) => {
        if (risposta === risposteGiuste[indice]) {
            punteggio += 20;
        }
    });

    // console.log(punteggio);

    scrollTo(0, 0);

    risultato.classList.remove('d-none');

    // risultato.querySelector('.punteggio').textContent = `${punteggio}%`;

    let output = 0;
    const timer = setInterval(() => {
        risultato.querySelector('.punteggio').textContent = `${output}%`;
        if (output === punteggio) {
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10);
});

// Window object
console.log(window);

// console.log('ciao');
// window.console.log('ciao di nuovo');

// console.log(document.querySelector('.quiz-form'));
// console.log(window.document.querySelector('.quiz-form'));

// window.alert()

// setTimeout(() => {
//     alert('ciao');
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log('ciao');
//     i++;
//     if (i === 5) {
//         clearInterval(timer)
//     }
// }, 1000);