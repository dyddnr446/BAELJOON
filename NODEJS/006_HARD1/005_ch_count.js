const input = require('fs').readFileSync(0,"utf-8").toString().trim().toUpperCase();

let result = {};
for(let i of input){
    result[i] = (result[i]||0)+1;
}
const max_cnt = Math.max(...Object.values(result));
const max_rp = Object.keys(result).filter((v)=>result[v]===max_cnt);

if(max_rp.length != 1) console.log("?");
else console.log(max_rp[0]);
