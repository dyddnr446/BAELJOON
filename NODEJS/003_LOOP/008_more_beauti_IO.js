const fs = require('fs');

const input = fs.readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const num = Number(input[0]);

for(let i=1;i<=num;i++){
    const [a, b] = input[i].split(" ").map(Number);
    console.log(`Case #${i}: ${a} + ${b} = ${a+b}`);
}