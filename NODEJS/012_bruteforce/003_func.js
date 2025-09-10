const n = require('fs').readFileSync(0, "utf-8").toString().split(" ").map(Number);

a = n[0];
b = n[1];
c = n[2];
d = n[3];
e = n[4];
f = n[5];

function test(a, b, c, d, e, f){
    for(let i=-999;i<=999;i++){
        for(let j=-999;j<=999;j++){
            if(a*i + b*j === c && d*i + e*j === f){
                return [i, j];
            }
        }
    }
}

const [n0, n1] = test(a, b, c, d, e, f);
console.log(n0, n1);