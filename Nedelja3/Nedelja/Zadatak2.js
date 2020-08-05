function lifesupply(numPerMonth,age){
    let pizzaAge = numPerMonth*12; // koliko pice godisnje se pojede..
    let ages = 100-age;
    let pizza
    for(let i = 1; i<=ages;i++){
        pizza = pizzaAge*i
    }
    return pizza
}

console.log(lifesupply(10,26))