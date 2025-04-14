// ? Snack 1
// ? Creare un array di oggetti:
// ? Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// ? Stampare a schermo la bici con peso minore.

// TODO 1: 
//* Creo un array di oggetti, che contiene due proprietà:
//* nome: stringa per nome bici
//* peso: numero per peso bici
const bicycles = [
    {
        nameBicycle: `Specialized`,
        bikeWeight: 9.5
    },
    {
        nameBicycle: `BMC`,
        bikeWeight: 7.2
    },
    {
        nameBicycle: `Scott`,
        bikeWeight: 6.8
    },
    {
        nameBicycle: `Colnago`,
        bikeWeight: 7
    },
    {
        nameBicycle: `Cannondale`,
        bikeWeight: 11.2
    }
]

// TODO 2:
//* confronto il peso di ogni bici per trovare quella con il peso minore
let lightBicycle = bicycles[0]; //creo una variabile dandogli il valore del primo indici del mio array, supponendo che sia la più leggera

// ciclo for per confrontare il primo indice bicycles[0] con il successivo
// il mio confronto parte quindi dal primo indice i = 1, scorre per tutta la lunghezza dell'array e a ogni giro incrementa di 1 
for (let i = 1; i < bicycles.length; i++){
    // se il peso dell'indice che sto controllando bicycles[i].bikeWeight è minore lightBicycle.bikeWeight (variabile)
    if (bicycles[i].bikeWeight < lightBicycle.bikeWeight) {
        // allora la variabile assume il valore dell'indice che sto controllando
        lightBicycle = bicycles[i];
    }
}

// TODO 3:
//* mostro la bici più leggera
console.log(`La bici più leggera è: ${lightBicycle.nameBicycle} con un peso di ${lightBicycle.bikeWeight}`)
