/*
    I parametri di una funzione sono dei segnaposto che verranno poi valorizzati quando la funzione viene chiamata
*/
const saluta = function(nome) { // variabile locale che possiamo usare nel blocco della funzione
    console.log(`Buongiorno ${nome}`);
};

saluta('Stefano'); // Passiamo il valore di nome quando richiamiamo la funzione -> argomento

function salutaMeglio(nome, tempo) { // separiamo i parametri con le virgole
    console.log(`${tempo} ${nome}`);
}

salutaMeglio('Lorenzo', 'Buonasera'); // L'ordine è importante

// Se richiamiamo una funzione che richiede dei parametri senza passargli degli argomenti, i parametri assumono il valore di undefined. Per evitare che succeda possiamo assegnare dei valori di default
function salutaSicuro(nome = 'Utente', tempo = 'Salve') {
    console.log(`${tempo} ${nome}`);
}

salutaSicuro(); // Se non passiamo alcun argomento, la funzione assegnerà dei valori di default
salutaSicuro('Paola', 'Buon pomeriggio'); // Se passo degli argomenti, questi sovrascriveranno quelli di default

/*
    - Un parametro è la variabile elencata tra parentesi nella dichiarazione della funzione
    - Un argomento è il valore passato alla funzione quando viene chiamata
*/