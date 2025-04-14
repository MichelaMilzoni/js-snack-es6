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
//TODO 3: 
//* creo un nuovo array contenente solo:
//* nome: stringa
//* falli subiti: numero
//TODO 4:
//* stampo entrambi gli array