// 4 zad Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.
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
    karakteristike :  {napad: 20 , odbrana: 30, brzina: 70}
}
let pokemon3 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 60 , odbrana: 30, brzina: 80}
}
let pokemon4 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 70 , odbrana: 30, brzina: 60}
}


let nizPokemona = [pokemon1,pokemon2,pokemon3,pokemon4]

console.log(nizPokemona)
console.log('++++++++++++++++++++++++++++++++++++++++++++')

function pokemonJacina(nizJacina){
    //let nizPokemona = [pokemon1,pokemon2,pokemon3,pokemon4]
    let max = nizPokemona[0].karakteristike.napad
    for(let i = 1;i<nizPokemona.length;i++){
       if(max<nizPokemona[i].karakteristike.napad){
           max = nizPokemona[i].karakteristike.napad
       }
      
   }
   return max
}

console.log(pokemonJacina(nizPokemona))