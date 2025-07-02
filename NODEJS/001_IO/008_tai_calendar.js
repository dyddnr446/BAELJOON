const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(/\r?\n/);
const year = Number(input[0])

console.log(`${year-543}`)