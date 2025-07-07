const fs = require('fs');

const num = fs.readFileSync(0,"utf-8").toString().trim().split(" ").map(Number);
console.log((num[0]+1)*num[0]/2);