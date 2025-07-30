const input = require('fs').readFileSync(0,"utf-8").toString().trim().split('');

if(input.reverse().join('') === input.reverse().join(''))console.log(1);
else console.log(0)