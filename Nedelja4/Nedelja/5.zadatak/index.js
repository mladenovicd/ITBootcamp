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

let nizPokemona = [pokemon1, pokemon2, pokemon3, pokemon4]

const divWrapper = document.getElementsByClassName('.wrapper')
const buttonPrikaz = document.getElementById('#prikaz')
const buttonPobednik = document.getElementById('#pobednik')

/* <div>
        <p>Opis pokemona</p>
        <img src="slika odgovarajućeg pokemona">
    </div> */

const div = document.createElement('div')
for(let i = 0;i<nizPokemon.length;i++){
    const p = document.createElement('p')
    const img = document.createElement('img')
    if(i==0){
        p.textContent = 'Pokemon1'
        img.src = 'slike/pokemon1.jpg'
    }
    if(i==1){
        p.textContent = 'Pokemon2'
        img.src = 'slike/pokemon2.jpg'
    }
    if(i==2){
        p.textContent = 'Pokemon3'
        img.src = 'slike/pokemon3.jpg'
    }
    if(i==3){
        p.textContent = 'Pokemon4'
        img.src = 'slike/pokemon4.jpg'
    }
    div.append(p,img)
}  

buttonPrikaz.addEventListener('click',(e) =>{
    console.log(e.target)

}) 