//while petlja
{
    let brojac = 0;
    let i = 1;
    while(true){
        if(i%5==0){
            console.log(i)
            brojac++;
        }
        if(brojac==1000){
            break;
        }
        i++;
    }
}

//for petlja
{
    for(let brojac=0, i=1;brojac==1000;i++){
        if(i%5==0){
            console.log(i);
            brojac++;
        }
    }
}