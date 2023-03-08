// chiedi all'utente il numero di km che vuole percorrer e l'etá del passeggero
// calcola il prezzo del viaggio sapendo che
// prezzo biglietto 0.21 €/km
// SE <18 sconto 20%
// SE >65 sconto 40%
// output con due soli decimali


// chiedi all'utente il numero di km che vuole percorrere e l'etá del passeggero

const travelLenght = Number(prompt('Quanti Km vuoi percorrere?')) ;
console.log (travelLenght);

const userAge = Number(prompt('Quanti anni hai?'));
console.log (userAge);

// calcola il prezzo del viaggio sapendo che
// prezzo biglietto 0.21 €/km

const ticketPrice = (travelLenght * 0.21).toFixed(2)
// tofixed(2) arrotonda al secondo decimale

console.log (ticketPrice);

// SE <18 sconto 20%
// SE >65 sconto 40%

if (userAge <= 18) {
   const youngPrice = (ticketPrice - (ticketPrice / 100 * 20)).toFixed(2) ;
// tofixed(2) arrotonda al secondo decimale

   document.getElementById("answear").innerHTML = `Il tuo prezzo giovani é ${youngPrice}€`;

   console.log(youngPrice);

}else if (userAge >= 65){
    const elderPrice = (ticketPrice - (ticketPrice /100 * 40)).toFixed(2);
// tofixed(2) arrotonda al secondo decimale

    document.getElementById("answear").innerHTML = `Il tuo prezzo anziani é ${elderPrice}€`;

    console.log(elderPrice);
}

else {
    document.getElementById("answear").innerHTML = `Il tuo prezzo normale é ${ticketPrice}€`;
}

// output con due soli decimali usando to fixed(2) sopra.