const input = require('fs').readFileSync(0,"utf-8").toString().trim();

let result=[];
for(let i=97;i<=122;i++){
    const alpha = String.fromCharCode(i);
    const index = input.indexOf(alpha)
    result.push(index);
}
console.log(...result);