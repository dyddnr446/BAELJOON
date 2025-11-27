const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);
input.shift();
const result = [];
input.map(v=>{
    if(v==0)result.pop();
    else result.push(v);
});

const sum = result.reduce((pv,cv)=>{
    return pv+cv;
},0);

console.log(sum);
