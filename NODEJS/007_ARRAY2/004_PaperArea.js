const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" ").map(Number));


input.shift();

let matrix = Array.from({length:100},()=> Array.from({length:100},()=>0));
for(let i=0;i<input.length;i++){
    let x = input[i][0];
    let y = input[i][1];
    for(let j=0;j<10;j++){
        for(let k=0;k<10;k++){
            matrix[x+j][y+k]=1;
        }
    }
}

let area=0;
for(let i=0;i<100;i++){
    for(let j=0;j<100;j++){
        if(matrix[i][j]===1)area++;
    }
}

console.log(area);