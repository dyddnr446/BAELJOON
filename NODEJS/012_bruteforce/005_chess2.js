const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const mat = input.slice(1).map((v)=>v.split(""));

function test(mat){
    let count1 =0;
    let count2 =0;
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
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
function mat_split(mat){
    let result = [];
    let tmp_row = [];
    let tmp_mat = [];
    for(let i=0;i<=mat.length-8;i++){
        for(let j=0;j<=mat[i].length-8;j++){
           tmp_mat=[];
           for(let k=i;k<i+8;k++){
                tmp_row=[];
                for(let z=j;z<j+8;z++){
                    tmp_row.push(mat[k][z]);
                }
                tmp_mat.push(tmp_row);
           }
           result.push(test(tmp_mat));
        }
    }
    return Math.min(...result);
}
const result = mat_split(mat);
console.log(result);