const input = require('fs').readFileSync(0,"utf-8").trim().split(/\r?\n/);
const num = input[0].split(" ").map(Number)[1];
const nums = input[1].split(" ").map(Number)
const result = nums.filter((n)=>n<num);
console.log(result.join(" "));

