/*
    Lo switch statement consente di eseguire diversi blocchi di codice in base al valore di un'espressione. È utile per semplificare il controllo del flusso quando si lavora con più condizioni basate su un'unica variabile, così da non dover usare tante istruzioni if-else, rendendo il codice più leggibile.

    - Espressione: l'espressione viene valutata una sola volta.
    - Casi: ogni caso rappresenta un valore da confrontare con l'espressione. Ser c'è una corrispondenza, il codice associato a quel caso viene eseguito.
    - Break: la parola chiave break interrompe l'esecuzione dello switch, impedendo l'esecuzione dei casi successivi. Se si omette, il codice continuerà a essere eseguito nei casi successivi ("fall-through").
    - Default: il blocco di default è facoltativo e viene eseguito se nessuno dei casi corrisponde all'espressione.
*/
let voto = 'B';

switch (voto) {
    case 'A':
        console.log('Hai preso una A!');
        break;
    case 'B':
        console.log('Hai preso una B!');
        break;
    case 'C':
        console.log('Hai preso una C.');
        break;
    case 'D':
        console.log('Hai preso una D...');
        break;
    case 'E':
        console.log('Hai preso una E :(');
        break;
    default:
        console.log('Il tuo voto non è valido');
}