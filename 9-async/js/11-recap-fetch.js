const demo = document.querySelector('.demo');

// Attraverso le API fetch possiamo comunicare con delle API esterne, ovvero richiedendo o inviando dati presso delle risorse (endpoint = url)
const urlEndpoint = 'https://dummyjson.com/recipes';

// Quando nella fetch passiamo solo l'endpoint stiamo eseguendo una request di tipo GET
fetch(urlEndpoint)
    .then(response => {
        return response.json(); // Il metodo json() applicato alla response recupera i dati e nassconde un parse(), che li trasforma in oggetti comprensibili alla nostra tecnologia
    })
    .then(data => {
        console.log(data);

        // data.recipes è un array di 30 oggetti
        let ricette = data.recipes;
        console.log(ricette[0].name);

        // ricette.forEach(ricetta => {
        //     demo.innerHTML += ricetta.name;
        // });

        stampaRicette(ricette);
    });

function stampaRicette(ricette) {
    ricette.forEach(ricetta => {
        demo.innerHTML += `
            <li>${ricetta.name} <img style="width: 150px; height: auto;" src="${ricetta.image}"></li>
        `;
    });
}


function inviaProdotto() {
    
    let mioProdotto = {
        name: 'PC Dell',
        version: 'Vostro 5580'
    };

    let urlEndpointPOST = 'https://dummyjson.com/products/add';

    fetch(urlEndpointPOST, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mioProdotto)
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', inviaProdotto);