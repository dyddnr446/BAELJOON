const n = require('fs').readFileSync(0,"utf-8").toString().split(/\r?\n/).map(Number);
console.log(n[0]*n[1]);
