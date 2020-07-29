function Pizza(r,cena){
    let povrsina = r*r*Math.PI;
    let cenaPocm3 = cena / povrsina;
    console.log(cenaPocm3);
}

let r = 2;
let cena = 100;

Pizza(r,cena);