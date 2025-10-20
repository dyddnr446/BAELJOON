const [a,b] = require('fs').readFileSync(0,"utf-8").toString().split(" ").map(BigInt);


function minDiv(a,b){
    let r;
    while(b!=0n){
        r = a%b;
        a = b;
        b = r
    };
    return a;
}


console.log((a * b / minDiv(a,b)).toString());