'use strict';

//Inizializzo oggetto per la libreria vuota
const library = {};

//Creo una funzione per aggiungere un nuovo libro.
function addBook() {
    let title = prompt('Inserisci il titolo del libro');
    let author = prompt("Inserisci l'autore del libro");
    let pubDate = prompt('Inserisci la data di pubblicazione del libro');

    // Creo oggetto book, assegno i valori inseriti dall'utente
    let book = {
        title: title,
        author: author,
        pubDate: pubDate
    };

    // Genera un nuovo ISBN
    function generateISBN() {
        return Object.keys(library).length + 1;
    }

    // Aggiungere ISBN alla libreria
    let isbn = generateISBN();
    library[isbn] = book;
}

//Richiamo la funzione per aggiungere un nuovo libro.
addBook();

console.log(library);
