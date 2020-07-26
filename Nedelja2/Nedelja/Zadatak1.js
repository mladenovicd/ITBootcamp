let cena = 153;
let precnik = 10;
let poluprecnik = precnik/2;
let povrsina  = poluprecnik * poluprecnik * Math.PI; //povrsina u m^2;

let povrsinaCM = povrsina * 1000 // povrsina u cm^2

console.log(povrsinaCM);

let cenapoCM = (cena/povrsinaCM);

console.log(cenapoCM);

