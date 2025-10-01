const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" ").map(Number));
const tg = new Set(input[1]);
const pocket = input[3];

const result = pocket.map((v) => {
    return Number(tg.has(v));
});

console.log(result.join(" "));