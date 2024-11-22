const pokemons = [{
    id: 0,
    nome: "Bulbasaur",
    tipo: "erba",
    abilita: "Foglielama",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    info: "Il best boy. Abbastanza socievole se non infastidito"
}, {
    id: 1,
    nome: "Charmander",
    tipo: "fuoco",
    abilita: "Braciere",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    info: "In caso vada fuori controllo chiamare 112 e farsi passare i pompieri"
}, {
    id: 2,
    nome: "Squirtle",
    tipo: "acqua",
    abilita: "pistolacqua",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    info: "Non è un pompiere"
}, {
    id: 3,
    nome: "Pikachu",
    tipo: "elettrico",
    abilita: "tuonoshock",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    spriteSpalle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    info: "Coloro i quali lo agganceranno al contatore saranno punibili secondo norma cod. Penale"
}];

const pokedex = document.querySelector('.pokedex');

function creaCard() {
    pokemons.forEach(pokemon => {
        let card = `
            <div class="pokemon">
                <div class="card">

                    <img src="${pokemon.sprite}" class="card-img" alt="${pokemon.nome}">
                    
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.nome}</h5>
                        <p class="card-text">
                            Abilità: ${pokemon.abilita}
                        </p>
                        <button class="btn" data-id="${pokemon.id}">Mostra info</button>
                    </div>
                </div>
            </div>
        `;

        pokedex.innerHTML += card;
    });
}

pokedex.addEventListener('click', e => {
    // console.log(e.target.tagName);

    if (e.target.tagName === 'BUTTON') {

        let infoPoke = document.createElement('p');

        if (e.target.textContent === 'Mostra info') {   
            // mostro info
            infoPoke.classList.add('card-text');
            infoPoke.textContent = pokemons[e.target.getAttribute('data-id')].info;
            e.target.parentElement.insertBefore(infoPoke, e.target);

            // cambio testo bottone
            e.target.textContent = 'Nascondi info';

            // cambio img (giro pokemon)
            e.target.parentElement.previousElementSibling.setAttribute('src', pokemons[e.target.getAttribute('data-id')].spriteSpalle)
        } else {
            e.target.previousElementSibling.remove();

            e.target.textContent = 'Mostra info';

            e.target.parentElement.previousElementSibling.setAttribute('src', pokemons[e.target.getAttribute('data-id')].sprite)
        }
    }
})

creaCard();