const nums = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);
let remains = nums.map((val)=>val%42);
const result = new Set(remains).size;
console.log(result);