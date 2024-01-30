/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


- chiedo all'utente il numero di km e lo memorizzo in una variabile
- chiedo all'utente l'età e la memorizzo
- genero un prezzo base calcolato moltiplicando l'età per 0.21
? SE l'età è < 18
    - allora fai sconto del 20%
: ALTRIMENTI SE l'età è >= 65
    - allora applica sconto del 40%
- approssimare il prezzo finale a due decimali
- stampare in pagina

*/


// - chiedo all'utente il numero di km e lo memorizzo in una variabile
// let kmNumber = prompt("Quanti km devi percorrere?");
// // converto in numero;
// kmNumber = Number(kmNumber);

const kmNumber = Number( prompt(`Quanti km devi percorrere?`) );

// bonus: controlliamo che il valore inserito sia corretto
// non un numero, minore di 1


// possiamo segnarci da qualche parte che c'è stato un errore
// se alla fine sappiamo che c'è stato un errore, non scriviamo nulla in pagina
// queste si chiamano variabili flag
let errorHappened = false;



// se l'if è vero, il valore è errato
if(isNaN(kmNumber) || kmNumber < 1 ) {
    // avviso l'utente dell'errore
    alert("Hai inserito un valore errato, ti preghiamo di ricaricare la pagina e inserire il valore indicato correttamente");

    // segnamo che l'errore è capitato
    errorHappened = true;
}


// const kmNumber = 100;

let age;

// se non è successo nessun errore precedendemente, chiedo anche l'età
if(errorHappened == false) {
    // - chiedo all'utente l'età e la memorizzo
    age = Number( prompt("Quanti anni hai?") );

    // validazione input
    if(isNaN(age) || age < 0 || age > 122  ) {
        alert("Hai inserito un valore errato, ti preghiamo di ricaricare la pagina e inserire il valore indicato correttamente");
        
        // segnamo che l'errore è capitato
        errorHappened = true;
    }
}






// - genero un prezzo base calcolato moltiplicando l'età per 0.21
const basePrice = 0.21 * kmNumber;


// assegno a finalPrice dall'inizio il prezzo base, se ci sono sconti da applicare verrà sovrascritto, altrimenti verrà lasciato così
let finalPrice = basePrice;

let discountMessage = "";

// ? SE l'età è < 18
if(age < 18) {

    // - allora fai sconto del 20%
    finalPrice = basePrice - basePrice * 0.2;

    discountMessage = "È stato applicato uno sconto del 20% perchè sei minorenne";

} else if (age >= 65) {
    // - allora applica sconto del 40%
    finalPrice = basePrice - basePrice * 0.4;
    
    discountMessage = "È stato applicato uno sconto del 40% perchè sei over 65";
}

console.log( finalPrice );
console.log( "€ " + finalPrice.toFixed(2) );


// - stampare in pagina
// SOLO se non ci sono stati errori
if( ! errorHappened) {
    document.getElementById("result").innerHTML = "Il prezzo del tuo biglietto è di € " + finalPrice.toFixed(2) + "<br>" + discountMessage;
}

