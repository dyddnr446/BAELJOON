const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);

function is_pNum(num){
    if(num<=1)return false;
    if(num===2)return true;
    if(num%2===0)return false;
    let limit = Math.floor(Math.sqrt(num));
    for(let i=3;i<limit+1;i+=2){
        if(num%i===0) return false;
    }
    return true;
}

let result = [];
for(let i=input[0];i<=input[1];i++){
    let isPN = is_pNum(i)
    if(isPN)result.push(i);
}

if(result.length>0){
    console.log(result.reduce((pv,cv)=>{
        return pv+cv;
    },0));
    console.log(result[0]);
}

else console.log(-1);
