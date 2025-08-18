const input = require('fs').readFileSync(0,"utf-8").toString().split(" ").map(Number);

let divisors = [];

for(let i=1;i<=input[0];i++){
    if(input[0]%i===0)divisors.push(i);
}
if(divisors[input[1]-1]===undefined)console.log(0);
else console.log(divisors[input[1]-1]);