class Covek {
    constructor(ime, prezime, godinaRodjenja) {
        this.ime = ime
        this.prezime = prezime
        this.godinaRodjenja = godinaRodjenja
    }
}

class Student extends Covek {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek){
        super(ime, prezime, godinaRodjenja)
        this.trenutnaGodinaStudija = trenutnaGodinaStudija
        this.trenutniProsek = trenutniProsek
    }
}

class StudentOsnovnihStudija extends Student {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek)
        this.smerOsnovnihStudija = smerOsnovnihStudija
    }
}

class StudentMasterStudija extends Student {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerMasterStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek)
        this.smerMasterStudija = smerMasterStudija
    }
}

class Zaposleni extends Covek {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata){
        super(ime, prezime, godinaRodjenja)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}

class Nastavnik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata)
        this.omiljeniPredmet = omiljeniPredmet
        this.listaPredmeta = listaPredmeta
    }
}

class Profesor extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet,     listaPredmeta, titula){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.titula = titula
    }
}

class Asistent extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet,     listaPredmeta, smerDoktorskihStudija){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.smerDoktorskihStudija = smerDoktorskihStudija
    }
}

class Sluzbenik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, odsek){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata)
        this.odsek = odsek
    }
}

let studentO = new StudentOsnovnihStudija('Nikola', 'Jovanovic', 2000, 'prva', 9, 'Fitomedicina')
console.log(studentO)

let studentM = new StudentMasterStudija('Strahinja', 'Jakovljevic', 1992, 'prva', 8, 'Organksa Proizvodnja')
console.log(studentM)

let profa = new Profesor('Aleksa', 'Obradovic', 1965, 1985, 100000, 'Bakterioze bilja', ['Bakerioze bilj', 'Viroze bilja'], 'redovni')
console.log(profa)

let asistent = new Asistent('Ana', 'Jovanovic', 1990, 2014, 40000, 'Viroze bilja', ['Mikoze', 'Bakterioze bilja', 'Viroze bilja'], 'Fitomedicina')
console.log(asistent)

let sluzba = new Sluzbenik('Gordana', 'Jovanovic', 1980, 2005, 300000, 'Studentska sluzba')
console.log(sluzba)