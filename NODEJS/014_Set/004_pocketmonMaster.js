const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const [N, M] = input[0].split(" ").map(Number);
const dict = input.slice(1,N+1);
const ask = input.slice(N+1);

const new_dict = new Map();
dict.forEach((v,i)=>{
    new_dict.set(v,i+1);
});

ask.forEach((v)=>{
    if(!isNaN(Number(v)))console.log(dict[v-1]);
    else console.log(new_dict.get(v));
});