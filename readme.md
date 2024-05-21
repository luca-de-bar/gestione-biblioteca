## Gestione biblioteca

- Crea un programma per gestire una biblioteca : 

- Crea un oggetto chiamato biblioteca che contenga una lista di libri. Ogni libro nella lista è anch'esso un oggetto, che include le seguenti proprietà: titolo, autore, e anno.

- Scrivi una funzione aggiungiLibro che accetti come parametri titolo, autore, e anno. La funzione deve creare un nuovo libro e aggiungerlo alla lista dei libri nella biblioteca.

-  Scrivi una funzione mostraLibri che stampi in console tutti i libri presenti nella biblioteca. Ogni libro deve essere stampato con tutte le sue proprietà.

- Nella funzione mostraLibri, utilizza un ciclo for per scorrere e stampare tutti i libri nell'oggetto biblioteca.


## Cosa ho imparato : 

- per accedere ai dati di un oggetti, c'è differenza tra dot notations e bracket notations : 

// Definisco un oggetto

const myObject = {
    firstName : 'Luca',
    lastName : 'De Bar',
    job : 'Developer',
    friends : ['Gianpaolo','Gino','Gianluca','Giulia'],
    status : 'rich'
}

let myName = 'firstName';

//Dot notations
console.log(myObject.firstName) //risultato sarà "Luca"

//Bracket Notations 
console.log(myObject[myName]) // risultato sarà "Luca"


Nelle bracket notations ho la possibilità di utilizzare variabili, nelle dot notation no.

- con Object.keys(yourObject).length verifico quanti elementi contiene l'oggetto. E' l'equivalente di array.length ma per gli oggetti.