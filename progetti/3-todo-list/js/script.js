const addForm = document.querySelector('.add');
const lista = document.querySelector('.todos');
const searchInput = document.querySelector('.search');

const generaTemplate = todo => {
    const html = `
        <li>
            <span>${todo}</span>
            <i class="fa-regular fa-trash-can delete"></i>
        </li>
    `;

    lista.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    // Uso il metodo trim() per rimuovere gli spazi bianchi a inizio e fine di una stringa
    let todo = addForm.add.value.trim();
    // console.log(todo);

    if (todo.length) {
        generaTemplate(todo);

        // Questo metodo resetta tutti i campi di input di un form
        addForm.reset();
    }
});

lista.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filtraTodos = query => {
    // console.log(query);

    Array.from(lista.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(query))
        .forEach(todo => todo.classList.add('d-none'));

    Array.from(lista.children)
        .filter(todo => todo.textContent.toLowerCase().includes(query))
        .forEach(todo => todo.classList.remove('d-none'));
};

searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.trim().toLowerCase();
    filtraTodos(query);
});