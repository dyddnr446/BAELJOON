const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);

const [row, col] = input[0].split(" ").map(Number);
const mat = input.slice(1).map((v)=>v.split(""));

function test(row, col, mat){
    let count1 =0;
    let count2 =0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if((i + j) % 2 === 0){
                if(mat[i][j] !== 'W'){
                    count1++;
                }
                if(mat[i][j] !== 'B'){
                    count2++;
                }
            } else {
                if(mat[i][j] !== 'B'){
                    count1++;
                }
                if(mat[i][j] !== 'W'){
                    count2++;
                }
            }
        }
    }
    return Math.min(count1, count2);

}
const result = test(row, col, mat);
console.log(result);