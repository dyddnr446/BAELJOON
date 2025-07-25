const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(" ");

const a = Number(input[0].split('').reverse().join(''));
const b = Number(input[1].split('').reverse().join(''));

if(a>b)console.log(a);
else console.log(b);