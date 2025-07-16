const nums = require('fs').readFileSync(0, "utf-8").toString().trim().split(/\r?\n/).map(Number);
const max = Math.max(...nums);
const index = nums.findIndex(n=>n==max)+1;
console.log(max);
console.log(index);