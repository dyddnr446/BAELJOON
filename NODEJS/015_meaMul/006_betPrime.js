const [a, b] = require('fs').readFileSync(0,"utf-8").toString().trim().split(" ").map(Number);

function prime(n){
    if(n<2)return 0;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)return 0;
    }
    return 1;
}

for(let i=a;i<=b;i++){
    if(prime(i))console.log(i);
}