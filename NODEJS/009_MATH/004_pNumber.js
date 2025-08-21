const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" ").map(Number));
input.shift();

function test(num){
    if(num===1)return false;
    for(let i=2;i<num;i++){
        if(num%i===0) return false;
    }
    return true;
}

const result = input[0].reduce((pv,cv)=>{
    if(test(Number(cv)))return pv+=1;
    else return pv;
},0);

console.log(result);
