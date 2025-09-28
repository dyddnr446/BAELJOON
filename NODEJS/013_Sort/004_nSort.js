let input = require('fs').readFileSync(0,"utf-8").toString().trim().split("").map(Number);
input = input.sort((a,b)=>b-a);
console.log(input.join(""));


