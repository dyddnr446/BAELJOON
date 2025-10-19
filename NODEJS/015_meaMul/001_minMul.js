const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" ").map(Number));

function maxDiv(a, b){
    let r;
    while(b!=0){
        r = a%b;
        a = b;
        b = r;
    }
    return a;
}

input.slice(1).forEach(([a, b])=>{
    const result = maxDiv(a,b);
    console.log(a*b/result);
})
