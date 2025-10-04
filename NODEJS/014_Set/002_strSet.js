const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const n = input[0].split(" ")[0];
input.shift();

const pocket = new Set(input.slice(0,n));
const list = input.slice(n);

let cnt = 0;
list.forEach((v)=>{
    if(pocket.has(v))cnt++;
});
console.log(cnt);
