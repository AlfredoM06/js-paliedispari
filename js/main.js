// esercizio 1 parola palindroma

// chiedere all'utente se vuole giocare
let askPlayer = prompt("Vuoi giocare a è Palindromo?");

let play = true;

if (askPlayer == "si") {
    while (play == true) {
        // chiedere all'utente una parola

        let askName = prompt("Inserisci una parola");

        // devo creare una funzione per vedere se la parola è palindroma 
        ceckIfPalindrome(askName);

        let askContinue = prompt ("Vuoi continuare a giocare?");

        if (askContinue == "si") {
            play = true;
        } else {
            play = false;
        }
    }
}




// esercizio 2 chiedere all'utente se vuole giocare, di scegliere pari o dispari, inserire un numero da 1 a 5 e dire se ha vinto
 askPlayer = prompt("Vuoi giocare a è Pari o Dispari?");

 play = true;

if (askPlayer == "si") {
    while (play == true) {
       genarateEvenOrOdd();

        let askContinue = prompt ("Vuoi continuare a giocare?");

        if (askContinue == "si") {
            play = true;
        } else {
            play = false;
        }
    }
}






//-------------- FUNZIONI---------------

// se l'utente vuole giocare dagli la risposta se è palindroma o meno la parola

function ceckIfPalindrome (name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
        let j = name.length - 1 - i;

        if ( name [i] != name [j] ) {
            alert("non è palindroma");
            return;
        }

    } 
    alert("è palindroma");
}

// crea una funzione per generare un numero random da 1 a 5

function generateRandom (min, max) {
    return Math.floor(Math.random()* (max - min + 1))  +min;
}


// creare la funzione per sommare numero chiesto all'utente con numero random e vedere se è pari o dispari e se ha vinto

function genarateEvenOrOdd () {

    let askEvenOrOdd; 

    let correct = false;

    while (!correct){
        askEvenOrOdd = prompt("Inserisci pari o dispari");
        if (askEvenOrOdd != "pari" && askEvenOrOdd != "dispari") {
            alert("strunz è sbagliat a scriver");
            correct = false;
        } else {
            correct = true;
        }

    } 

    correct = false;
    let askNumber;

    while (!correct) {
        askNumber = prompt("Inserisci un numero da 1 a 5");
        askNumber = parseInt (askNumber);

        if (askNumber >= 1 && askNumber <=5){
            correct = true;
        } else {
            alert("allor si propj strunz")
            correct = false;
        }
    } 

    // numeri da 1 a 5 random 

    let evenOrOddRandom = generateRandom(1, 5);

    // converto askNumber da testo a numero

    askNumber = parseInt(askNumber);

    // calcolo la somma 

    let sumNumber = askNumber + evenOrOddRandom;

    // controllo se la somma è pari o dispari e comunico all'utente il risultato

    if ( sumNumber % 2 == 0) {
        //è pari

        console.log("la somma è pari");

        if (askEvenOrOdd == "pari") {
            alert("Hai vinto");
        } else {
            alert("hai perso");
        }
    } else {
        // se non è pari è dispari
        console.log("la somma è dispari");

        if (askEvenOrOdd == "dispari") {
            alert("Hai vinto");
        } else {
            alert("hai perso");
        }
    }


}







