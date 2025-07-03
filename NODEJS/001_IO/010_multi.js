const fs = require('fs');

const input = fs.readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const numbers = [];
input.map((str)=> str.split(" ").map((num)=>{numbers.push(Number(num))}));


console.log(numbers[0]*(numbers[1]%10));
console.log(numbers[0]*(Math.trunc(numbers[1]%100/10)));
console.log(numbers[0]*(Math.trunc(numbers[1]/100)));
console.log(numbers[0]*numbers[1]);