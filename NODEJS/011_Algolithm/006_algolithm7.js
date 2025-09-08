const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(n=>n.split(" ").map(Number));

const a1 = input[0][0];
const a0 = input[0][1];
const c = input[1][0];
const n0 = input[2][0];

if (a1 > c) {
  console.log(0);
} else if (a0 <= (c - a1) * n0) {
  console.log(1);
} else {
  console.log(0);
}