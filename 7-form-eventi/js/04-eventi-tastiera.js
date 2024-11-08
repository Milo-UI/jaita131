/*
    Per rendere la vita più facile all'utente e dagli velocemente un feedback sulla corretteza di quello che scrive, possiamo intercettare eventi della tastiera
*/
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validazione
    let username = form.username.value;

    if (usernamePattern.test(username)) {
        // feedback positivo
        feedback.textContent = 'Lo username è valido';
        feedback.classList.remove('notOk');
        feedback.classList.add('ok');
    } else {
        // feedback errore
        feedback.textContent = 'Lo username deve contenere solo lettere e deve essere di almeno 6 caratteri';
        feedback.classList.remove('ok');
        feedback.classList.add('notOk');
    }
});

// live feedback
form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        console.log('ok');
        form.username.classList.add('ok');
        form.username.classList.remove('notOk');
    } else {
        console.log('non ok');
        form.username.classList.add('notOk');
        form.username.classList.remove('ok');
    }
});