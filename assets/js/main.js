// chiedi all'utente il numero di km che vuole percorrer e l'etá del passeggero
// calcola il prezzo del viaggio sapendo che
// prezzo biglietto 0.21 €/km
// SE <18 sconto 20%
// SE >65 sconto 40%
// output con due soli decimali


// chiedi all'utente il numero di km che vuole percorrere e l'etá del passeggero

const travelLenght = Number(prompt('Quanti Km vuoi percorrere?')) 
console.log (travelLenght)

const userAge = Number(prompt('Quanti anni hai?'))
console.log (userAge)

// calcola il prezzo del viaggio sapendo che
// prezzo biglietto 0.21 €/km

const ticketPrice = (travelLenght) * 0.21
// perché va solo con le parentesi?
console.log(ticketPrice);