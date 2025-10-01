const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" ").map(Number));

const hubo = input[1].sort((a,b)=>b-a);
console.log(hubo[input[0][1]-1]);