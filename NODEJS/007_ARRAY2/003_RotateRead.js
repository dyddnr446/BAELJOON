const input = require('fs').readFileSync(0,"utf-8").toString().split(/\r?\n/).map((ar)=>ar.split(""));

let str = ""
let max_col = Math.max(...input.map((ar)=>ar.length));

for(let i=0;i<max_col;i++){
    for(let j=0;j<input.length;j++){
        if(input[j] && input[j][i] != undefined) str+=input[j][i];
    }
}
console.log(str);