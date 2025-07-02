const fs = require('fs');
const input = fs.readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const numbers = input.map((str)=>str.split(" ").map((num)=>Number(num)));

let num1=numbers[0][0];
let num2=numbers[0][1];

console.log(`${num1-num2}`);