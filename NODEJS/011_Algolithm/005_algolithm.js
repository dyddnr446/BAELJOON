const n = BigInt(require('fs').readFileSync(0,"utf-8").toString());

const result = n*(n-1n)*(n-2n)/6n;
console.log(result.toString());

console.log(3);