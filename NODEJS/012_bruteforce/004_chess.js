const input = require('fs').readFileSync(0,"utf-8").toString().split(" ").map(Number);

function test(n1, n2){
    let p = false;
    let mat=[];
    let raw=[];
    for(let i=0;i<n2;i++){
        for(let j=0;j<n1;j++){
            if(!p){
                raw.push("W");
                p=!p;
            }
            else {
                raw.push("B");
                p=!p;
            }
        }
        mat.push(raw);
        rar=[];
    }
    console.log(mat);
}

test(input[0],input[1]);