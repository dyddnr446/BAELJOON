const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);

function rest(rest){
    let result=[];
    let coins = [25,10,5,1];
    for(let i=0;i<coins.length;i++){
        if(rest>=coins[i]){
            result.push(Math.floor(rest/coins[i]));
            rest-=result[i]*coins[i];
        }else result.push(0);
    }
    return result;
}

input.shift();
input.map((v)=>console.log(...rest(v)));