const resultElement = document.querySelector("#result");


const sceltaUtente = prompt("Scegli 'carta', 'forbice', 'sasso'");
// const sceltaUtente = "carta";

// facciamo scegliere randomicamente al computer
// possiamo avere una variabile che sia un numero intero
// il valore 1 corrisponde a carta
// il valore 2 corrisponde a forbice
// il valore 3 corrisponde a sasso

// scegliamo un numero casuale da 1 a 3
const sceltaComputer = Math.floor(Math.random() * 3) + 1

let conversioneComputer;

// convertito da numero a stringa corrispondente
if(sceltaComputer == 1) {
    conversioneComputer = "carta";
} else if (sceltaComputer == 2) {
    conversioneComputer = "forbice";
} else {
    conversioneComputer = "sasso";
}



let vittoria = false;


if(sceltaUtente == conversioneComputer) {

    resultElement.innerHTML = `Hai scelto ${sceltaUtente}, il computer ha scelto ${conversioneComputer}<br> Avete pareggiato`;

} else {
    if(sceltaUtente == "carta") {

        if(conversioneComputer == "sasso") {
            vittoria = true;
        } else {
            vittoria = false;
        }
    
    } else if(sceltaUtente == "sasso") {
        if(conversioneComputer == "forbice") {
            vittoria = true;
        } else {
            vittoria = false;
        }
    } else {
        if(conversioneComputer == "carta") {
            vittoria = true;
        } else {
            vittoria = false;
        }
    }
    resultElement.innerHTML = `Hai scelto ${sceltaUtente}, il computer ha scelto ${conversioneComputer}<br>`;
    if(vittoria) {
        resultElement.innerHTML += "Hai vinto!";
    } else {
        resultElement.innerHTML +=  "Hai perso :(";

    }
} 


