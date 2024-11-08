/*
    Creare una pagina web che contenga un titolo e un bottone. Al click sul bottone si apre una popup col contenuto che preferite. Per chiuderla è possibile cliccare su una X in alto a destra o cliccando al di fuori della popup.
*/
const button = document.querySelector('.btn');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    // popup.style.display = 'flex';
    popup.classList.add('show');
});

close.addEventListener('click', () => {
    // popup.style.display = 'none';
    popup.classList.remove('show');
});

popup.addEventListener('click', e => {
    if (e.target === popup) {
        // popup.style.display = 'none';
        popup.classList.remove('show');
    }
});