const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const [col, row] = input[0].split(" ").map(Number);

for(let i=1;i<=col;i++){
    let mat1 = input[i].split(" ").map(Number);
    let mat2 = input[i+col].split(" ").map(Number);
    let result = []
    for(let j=0;j<row;j++){
        result.push(mat1[j]+mat2[j]);
    }
    console.log(result.join(" "));
}