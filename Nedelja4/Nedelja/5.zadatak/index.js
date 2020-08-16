let pokemon1 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 55 , odbrana: 30, brzina: 90},
    slika : 'https://cdn.bulbagarden.net/upload/thumb/f/fa/164Noctowl.png/1200px-164Noctowl.png'
}
let pokemon2 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 20 , odbrana: 30, brzina: 70},
    slika : 'https://cdn.bulbagarden.net/upload/thumb/f/fa/164Noctowl.png/1200px-164Noctowl.png'
}
let pokemon3 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 60 , odbrana: 30, brzina: 80},
    slika : 'https://cdn.bulbagarden.net/upload/thumb/f/fa/164Noctowl.png/1200px-164Noctowl.png'
}
let pokemon4 = {
    ime : 'pikacu',
    vrsta : 'elektricni', 
    sposobnosti : ['staticki elektricitet', 'ksbaig','asifgi'],
    karakteristike :  {napad: 70 , odbrana: 30, brzina: 60},
    slika : 'https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg'
}

let nizPokemona = [pokemon1, pokemon2, pokemon3, pokemon4]


// prikaz svih pokemona
const prikaz = document.getElementById('prikaz')
const body = document.querySelector('body')
const div1 = document.createElement('div1')
const div2 = document.createElement('div2')

prikaz.addEventListener('click', function() {
    
    for (let i = 0; i < nizPokemona.length; i++) {
        
        const p1 = document.createElement('p1')
        const p = document.createElement('p')
        p.textContent = ''
        p1.textContent= 
        `Name: ${nizPokemona[i].ime} ||
        Type: ${nizPokemona[i].vrsta}  ||
        Abilities: ${nizPokemona[i].sposobnosti} ||
        Characteristics: Attack: ${nizPokemona[i].karakteristike.napad}, Defense: ${nizPokemona[i].karakteristike.odbrana}, Speed: ${nizPokemona[i].karakteristike.brzina}`
        const img = document.createElement('img')
        img.src = nizPokemona[i].slika
        img.width = '200'
        div1.append(p1,p,img,p)
        body.append(div1)
        
    }
    div2.classList.add('hide')
    div2.textContent = ''
    div1.classList.remove('hide')
})


//prikaz pokemona koji ima najjaci napad

const pobednik = document.getElementById('pobednik')

pobednik.addEventListener('click', function() {
    
        
       
        const p2 = document.createElement('p2')
        p2.textContent= 
        `Name: ${nizPokemona[nizPokemona.length-1].ime} ||
        Type: ${nizPokemona[nizPokemona.length-1].vrsta} ||
        Abilities: ${nizPokemona[nizPokemona.length-1].sposobnosti} ||
        Characteristics: Attack: ${nizPokemona[nizPokemona.length-1].karakteristike.napad}, Defense: ${nizPokemona[nizPokemona.length-1].karakteristike.odbrana}, Speed: ${nizPokemona[nizPokemona.length-1].karakteristike.brzina}`
        const img = document.createElement('img')
        img.src = nizPokemona[nizPokemona.length-1].photo
        img.width = '400'
        div2.append(p2,img)
        body.append(div2)

        div1.classList.add('hide')
        div1.textContent = ''
        div2.classList.remove('hide')
})