const { resolveSoa } = require('dns');

const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" "));
input.shift();

let temp = new Set();

input.forEach((v)=>{
    if(v[1]==="enter")temp.add(v[0]);
    if(v[1]==="leave")temp.delete(v[0]);
});

const result = [...temp].sort((a,b)=>b.localeCompare(a));
result.forEach((v)=>{
    console.log(v);
});