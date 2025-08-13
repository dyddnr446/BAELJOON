const input = require('fs').readFileSync(0, "utf-8").trim().split(" ").map(Number);

const A = input[0];
const B = input[1];
const V = input[2];
const days = Math.ceil((V - A) / (A - B)) + 1;
console.log(days);