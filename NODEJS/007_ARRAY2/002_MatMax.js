const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((ar)=>ar.split(" ").map(Number));


let index_x = 0;
let index_y = 0;
let max = 0;

for(let i=0;i<input.length;i++){
    let temp_max = Math.max(...input[i]);
    if(temp_max>=max){
        max = temp_max;
        index_x = i+1;
        index_y = input[i].findIndex((v)=>v===max)+1;
    }     
}
console.log(max);
console.log(index_x, index_y);