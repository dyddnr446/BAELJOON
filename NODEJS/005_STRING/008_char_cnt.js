const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(" ");
const result = input.filter(v=>v!="");
console.log(result.length);