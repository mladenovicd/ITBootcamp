// 1 zad Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
let pokemon1 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 55 , odbrana: 30, brzina: 90}
}
let pokemon2 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 55 , odbrana: 30, brzina: 70}
}
let pokemon3 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 55 , odbrana: 30, brzina: 80}
}
let pokemon4 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 55 , odbrana: 30, brzina: 60}
}


let nizPokemona = [pokemon1,pokemon2,pokemon3,pokemon4]

console.log(nizPokemona)
console.log('++++++++++++++++++++++++++++++++++++++++++++')
//2 zad Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

function pokemon(){
    let nizPokemona = [pokemon1,pokemon2,pokemon3,pokemon4]
    let nizSposobnosti=[]
    for(let i = 0; i<nizPokemona.length;i++){
        nizSposobnosti.push(nizPokemona[i].sposobnosti)
    }
    return nizSposobnosti
}

console.log(pokemon());
console.log('-----------------------------')

//3 zad Сортирати покемоне по брзини, растуће.

let pokemoniBrzina = nizPokemona.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina)
console.log(pokemoniBrzina)