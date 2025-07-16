const input = require('fs').readFileSync(0,"utf-8").trim().split(/\r?\n/);
const nums = input[1].split(" ").map(Number);
const min = Math.min(...nums);
const max = Math.max(...nums);

console.log(`${min} ${max}`);
