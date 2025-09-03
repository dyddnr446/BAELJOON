const input = BigInt(require('fs').readFileSync(0,"utf-8").toString());

const result = input * input * input;
console.log(result.toString());
console.log(3);