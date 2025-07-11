let input = require('fs').readFileSync(0);
let cnt = parseInt(input);

let answer = ""

for(let i=1; i<=cnt; i++){
    answer+='*';
    console.log(answer);
}