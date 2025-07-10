const fs = require('fs');

const input = fs.readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const count = Number(input[0]);
const result = [];

for(let i=1;i<=count;i++){
    const [a, b] = input[i].split(" ").map(Number)
    result.push(a+b);
}

for(let i=0;i<count;i++){
    process.stdout.write(`Case #${i+1}: ${result[i]}\n`);
}