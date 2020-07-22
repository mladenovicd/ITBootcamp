let cena = 500;
let kolNovca = 50;
var trenutnoStanje;

if(kolNovca<cena){
    console.log("Nemate dovoljno novca");
    trenutnoStanje = kolNovca;
    console.log("Trenutno stanje: " + trenutnoStanje + ".");
}
else if(kolNovca>=cena){
    console.log("Uspesno ste kupili proizvod");
    trenutnoStanje = kolNovca-cena;
    console.log("Trenutno stanje: " + trenutnoStanje + ".")
}


