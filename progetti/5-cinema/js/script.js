/* ------------------------------ gestione menù ----------------------------- */
const btnMenu = document.querySelector('.main-header .menu-icon')
const menu = document.querySelector('.main-header');

function addMenuClass() {
    menu.classList.toggle('is-mobile-open');

    if (menu.classList.contains('is-mobile-open')) {
        btnMenu.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

btnMenu.addEventListener('click', addMenuClass);

/* --------------------------- fine gestione menù --------------------------- */

/* --------------------------- gestione carosello --------------------------- */
let titolo = document.querySelector('.titolo');
let locandina = document.querySelector('.locandina');
let attori = document.querySelector('.attori');
let durata = document.querySelector('.durata');
let anno = document.querySelector('.anno');
let genere = document.querySelector('.genere');
let linkFilm = document.querySelector('.link-film');

let films = [];

let filmScelti = [
    `https://www.omdbapi.com/?t=John+Wick&apikey=4214e970`,
    `https://www.omdbapi.com/?t=The+Prestige&apikey=4214e970`,
    `https://www.omdbapi.com/?t=Inception&apikey=4214e970`
];

const trovaFilm = async filmScelto => {
    const response = await fetch(filmScelto);
    const data = await response.json();

    console.log(data);

    return data;
};

filmScelti.forEach(filmScelto => {

    trovaFilm(filmScelto)
        .then(film => {
            let attori = film.Actors.split(', ');
            let generi = film.Genre.split(', ');
            let linkFilm = `https://it.wikipedia.org/wiki/${film.Title.replace(' ', '_')}`;

            let filmScelto = {
                titolo: film.Title,
                locandina: film.Poster,
                attori: attori,
                durata: film.Runtime,
                anno: film.Year,
                genere: generi,
                linkFilm: linkFilm
            };

            films.push(filmScelto);

            mostraFilm(contatore);
        })
        .catch(err => console.log(err))

});

console.log(films);

function mostraFilm(indice) {

    linkFilm.setAttribute('src', films[indice].linkFilm);

    titolo.innerHTML = films[indice].titolo;

    locandina.setAttribute('src', films[indice].locandina);
    locandina.setAttribute('alt', films[indice].titolo);

    attori.innerHTML = '';
    films[indice].attori.forEach(attore => {
        attori.innerHTML += `
            <li><a href="https://it.wikipedia.org/wiki/${attore}" target="_blank">${attore}</a></li>
        `;
    });

    durata.innerHTML = `Durata del film: ${films[indice].durata}`;

    anno.innerHTML = `Anno di uscita: ${films[indice].anno}`;

    genere.innerHTML = 'Genere: ';
    films[indice].genere.forEach(genereFilm => {
        genere.innerHTML += `<span>${genereFilm}</span>`;
    });
}

let contatore = 0;

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

function nextMovie() {
    if (contatore < films.length - 1) {
        contatore++;
    } else {
        contatore = 0;
    }

    mostraFilm(contatore);
}

function prevMovie() {
    if (contatore == 0) {
        contatore = films.length - 1;
    } else {
        contatore--;
    }

    mostraFilm(contatore)
}

btnPrev.addEventListener('click', prevMovie);
btnNext.addEventListener('click', nextMovie);

/* ------------------------- fine gestione carosello ------------------------ */

/* -------------------------- gestione ricerca film ------------------------- */