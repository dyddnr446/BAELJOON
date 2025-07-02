const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').toString().trim().split(/\r?\n/);
const numbers=input.map((str)=>str.split(" ").map(Number));

const num1 = numbers[0][0];
const num2 = numbers[0][1];
const num3 = numbers[0][2];

console.log((num1+num2)%num3);
console.log(((num1%num3)+(num2%num3))%num3);
console.log((num1*num2)%num3);
console.log(((num1%num3)*(num2%num3))%num3);