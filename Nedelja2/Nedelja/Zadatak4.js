
let n = 5;
let red='';
//for(let i = 0;i<n;i++){red = ' '.repeat(n-i+1) + '*'.repeat(i+1)}
for(let i = 1;i<=n;i++){
    red = ' '.repeat(n-i)+'*'.repeat(i);
     console.log(red);
}