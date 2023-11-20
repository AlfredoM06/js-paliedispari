


//devo chiedere se vuole giocare 
/*let playGame = "si"
let palindromicGame = prompt("Vuoi sapere se la tua parola è palindroma? si o no")
// inzio: caso palindromo o meno, raggionamento:
// inzio chiedendo le informazioni all'utente 
// poi creare devo creare una funzione che mi legga la parola e veda se è palindorma o meno
// in fine devo comunicare all'utente se lo è o no
let askName = prompt("Inserisci la parola");


//devo chiedere se vuole giocare anche ad un gioco nuovo

let playGameTwo = "si"
let gameEvenOrOdd = prompt("Vuoi giocare al gioco? si o no")

// inizio: caso pari o dispari, raggionamento:
// inzio sempre chiedendo info all'utente facendogli scegliere pari o dispari
// di seguito gli chiedo di inserire un numero e generarne uno randomico
// devo fare una funzione che mi sommi i due numeri e controlli che siano pari o dispari
// in fine devo comunicare che ha vinto.

let found = false;

function genarateEvenOrOdd( ) {
    if (gameEvenOrOdd == "si") {
        while (found == false && playGameTwo == "si") {

            let askEvenOrOdd = prompt("Inserisci pari o dispari");
            let askNumber = prompt("Inserisci numero");
            let randomNumber = Math.floor(Math.random()* 5) + 1;

            let sumNumber = askNumber + randomNumber; 

            for (let i = 0; i < sumNumber; i++){
                if ( i % 2 == 0) {
                    alert (" pari ")
                } else {
                    alert (" dispari ")
                }
            }
            
            
        }   

            

    }
}
esercizio non finito 
*/



/*
// chiedere all'utente una parola

let askName = prompt("Inserisci una parola");

// devo creare una funzione per vedere se la parola è palindroma 
ceckIfPalindrome(askName);

function ceckIfPalindrome (name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
        let j = name.length - 1 - i;

        if ( name [i] != name [j] ) {
            console.log("non è palindroma");
            return;
        }

    } 
    console.log("è palindroma");
}
*/

// l'utente deve scrivere pari o dispari e un numero da 1 a 5 




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

    // chiedo al computer di generarmi un numero randomico tra 1 e 5 

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







