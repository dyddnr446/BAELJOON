const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);
input.shift();

const PRIME = new Set();
function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)return 0;
    }
    return 1;
}
for(let i=2;i<=1000000;i++){
    if(isPrime(i))PRIME.add(i);    
}
input.forEach((v)=>{
    let cnt = 0;
    for(const x of PRIME){
        if(x>v)break;
        for(const y of PRIME){
            if(y>x)break;
            if(x+y==v)cnt++;
        }
    }
    console.log(cnt);    
});
