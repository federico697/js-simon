// consegna:
// Visualizzare in pagina 5 numeri casuali. da li parte un timer di 30 secondi.
// creare un array vuoto


let arrayNumeri = [];
let arrayNumeriGiusti = [];
let limiteNumeri = 5;

let risultato = document.getElementById('risultato')

let numeriRandomHtml = document.getElementById('numeriRandomHtml');

// funzione custom per generare un nymero random compreso fra il min e il max
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) ) + min;
}

// generiamo 5 numeri casuali
while ( arrayNumeri.length < limiteNumeri ) {
    arrayNumeri.push(getRandomInt(1, 100)) 
}

// numeriRandomHtml.innerHTML = arrayNumeri;


for ( let i = 0; i < arrayNumeri.length; i++ ){

    numeriRandomHtml.innerHTML += `<div class="box"> ${arrayNumeri[i]} </div>`

}



setTimeout ( function() {
    // idea 1: usare display none sui numeri
    // numeriRandomHtml.style.display = 'none';


    // idea 2: svuotre il div padre
    numeriRandomHtml.innerHTML = "";

}, 3000 );




setTimeout ( function() {

    // chiedere all'utente per 5 volte i numeri
        for( let y = 0; y < 5; y++ ){
        let numeroUtente = parseInt(prompt('Scrivi un numero di quelli che hai visto'));


        if(arrayNumeri.includes(numeroUtente)){
            // se la risposta è si
            arrayNumeriGiusti.push(numeroUtente);
        }
    }

    risultato.innerHTML = `il tuo punteggio è: ${arrayNumeriGiusti.length}, i numeri che hai azzeccato sono: ${arrayNumeriGiusti}`

}, 4000 );