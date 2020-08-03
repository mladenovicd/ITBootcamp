//Написати функцију која исписује све елементе низа који су дељиви са 5
function divisibleByFive(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%5==0){
            console.log(arr[i]);
        }
    }
}
let nizBrojeva = [1,2,3,4,5,10,15,23,1,5];
divisibleByFive(nizBrojeva);