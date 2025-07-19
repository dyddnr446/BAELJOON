const input = require('fs').readFileSync(0,"utf-8").toString().split(/\r?\n/);
const [N, M] = input[0].split(" ").map(Number);
let baskets = Array.from({length:N},(_,i)=>i+1);

for(let i=1;i<=M;i++){
    let [P, N] = input[i].split(" ").map(Number);
    let temp = baskets[P-1];
    baskets[P-1]=baskets[N-1];
    baskets[N-1]=temp;
}
console.log(...baskets);