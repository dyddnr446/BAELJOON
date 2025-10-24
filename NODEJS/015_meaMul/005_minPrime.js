const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);
input.shift();

function isPrime(n){
    if(n<2)return 0;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)return 0;
    }
    return 1;
}

const result = [];
input.forEach((v)=>{
    let temp = v;
    while(!isPrime(temp)){
        temp++;
    }
    result.push(temp);
});

result.forEach(v=>console.log(v));