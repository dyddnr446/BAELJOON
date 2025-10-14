const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const have = input[1].split(" ").map(Number);
const M = Number(input[2]);
const check = input[3].split(" ").map(Number);

const mHave = new Map();
const result = [];
for(const i of have){
    mHave.set(i,(mHave.get(i) || 0) +1 );
}

check.forEach((v)=>{
    result.push((mHave.get(v) || 0));
});

console.log(result.join(" "));