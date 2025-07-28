const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(" ").map(Number);
const pieces = [1, 1, 2, 2, 2, 8] // 킹, 퀸, 룩, 비숍, 나이트, 룩

let result = []
for(let i=0;i<6;i++){
   result.push(pieces[i] - input[i]);       
}

console.log(...result);