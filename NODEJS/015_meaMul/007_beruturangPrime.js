const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);

function isPrime(n){
    if(n<2)return 0;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)return 0;
    }
    return 1;
}

input.forEach((v)=>{
    let cnt=0;
    for(let i=v;i<=v*2;i++){
        if(isPrime(i))cnt++;
    }
    if(cnt>0)console.log(cnt);
});