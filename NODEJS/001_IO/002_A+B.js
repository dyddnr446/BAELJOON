const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").trim().split(/\r?\n/g);
const numbers = input[0].split(" ").map(num => Number(num));
const num1 = numbers[0];
const num2 = numbers[1];
console.log(num1 + num2);