function max(a,b,c){
    if(a>b && a>c){
        return "broj :" + a + "je najveci";
    }
    else if(b>a && b>c){
        return "broj : " + b + " je najveci"; 
    }
    else if(c>a && c>b){
        return "broj : " + c + " je najveci";
    }
}

let x = 15;
let y = 12;
let z = 5;

let resenje = max(x,y,z);
console.log(resenje);