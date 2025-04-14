// ? Snack2
// ? Creare un array di oggetti di squadre di calcio.
// ? Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// ? Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// ? Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// ? Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//TODO 1: 
//* creo array di squadre con 3 proprietà ciascuno:
//* nome: stringa
//* punti fatti: numero (lo imposto a 0 per iniziare e incremento successivamente)
//* falli subiti: numero (lo imposto a 0 per iniziare e incremento successivamente)

const team = [
    {
        teamName: `Milan`,
        pointsScored: 0,
        foulsSuffered: 0
    },
    {
        teamName: `Inter`,
        pointsScored: 0,
        foulsSuffered: 0
    },
    {
        teamName: `Juventus`,
        pointsScored: 0,
        foulsSuffered: 0
    },
    {
        teamName: `Cesena`,
        pointsScored: 0,
        foulsSuffered: 0
    }
]

//TODO 2: 
//* genero numeri casuali per assegnare valori alle proprietà punti e falli
for (let i = 0; i < team.length; i++) {
    team[i].pointsScored = (Math.floor(Math.random() * 10) + 1 );
    team[i].foulsSuffered = (Math.floor(Math.random() * 5) + 1);
}
//TODO 3: 
//* creo un nuovo array contenente solo:
//* nome: stringa
//* falli subiti: numero

// const foulsTeam = [];
// for (let i = 0; i < team.length; i++) {
//     const teams = team[i];
//     foulsTeam.push({
//         teamName: team.teamName,
//         foulsSuffered: team.foulsSuffered
//     })
// }
const foulsTeam = team.map(team => {
    return {
        teamName: team.teamName,
        foulsSuffered: team.foulsSuffered
    };
});
//! .MAP (SOSTITUISCE CICLO FOR!)
//! Itera automaticamente su ogni elemento dell'arry originale 
// //*(passa attraverso ogni elemento dell'array team)
//! Applica una funzione a ciascun elemento
//* per ogni squadra crea un nuovo oggetto con solo nome e efalli subiti 
//! Restituisce un nuovo array con gli elemneti dell'array precedente trasformati o modificati dalla funzione applicata
//* restituisce il nuovo array foulsTeam che contiene solo nome e falli subiti

//TODO 4:
//* stampo entrambi gli array
console.log(`Squadre originali:`, team);
console.log(`Nuovo Array con Nome e Falli subiti:`, foulsTeam);

