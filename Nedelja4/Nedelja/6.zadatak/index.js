const naruci = document.getElementsByClassName('naruci')
const naruciOdmah = document.getElementsByClassName('naruci-odmah')
const brojac = document.getElementById('brojac')

counter = 0

naruci[0].addEventListener('click', function(){
    counter += 1
    brojac.textContent = counter
})

naruci[1].addEventListener('click', function(){
    counter += 1
    brojac.textContent = counter
})

naruciOdmah[0].addEventListener('click', function(){
    if(counter > 0) {
        brojac.textContent = `Naručili ste ${counter} pice. ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`
        counter = 0
    }
    else{
        brojac.textContent = 'Korpa je prazna.'
    }
})

naruciOdmah[1].addEventListener('click', function(){
    if(counter > 0) {
        brojac.textContent = `Naručili ste ${counter} pice. ${(new Date()).getHours()}:${(new Date()).getMinutes()}:${(new Date()).getSeconds()}`
        counter = 0
    }
    else{
        brojac.textContent = 'Korpa je prazna.'
    }
})