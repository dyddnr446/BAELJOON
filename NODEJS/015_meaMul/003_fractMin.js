const input = require('fs').readFileSync(0,"utf-8")
    .toString().trim().split(/\r?\n/)
    .map(v=>v.split(" ").map(Number));

function gcd(a,b){
    let r;
    while(b!=0){
        r = a%b;
        a = b;
        b = r;
    }
    return a;
}
const [A, B] = input[0];
const [C, D] = input[1];
const lcm = B * D /gcd(B,D);

let boonza = (lcm/B)*A + (lcm/D)*C;
let boonmo = lcm;

const div = gcd(boonza,boonmo);
boonza /= div;
boonmo /= div;

console.log(`${boonza} ${boonmo}`);