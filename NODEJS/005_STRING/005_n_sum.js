const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const result = input[1].split('').map(Number).reduce((pv, cv)=>{
    return pv+cv;
},0)
console.log(result);