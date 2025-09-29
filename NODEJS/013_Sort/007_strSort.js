const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/r?\n/);

input.shift();

const arr = [...new Set(input)];
arr.sort((a,b)=>{
    if(a.length === b.length){
        return a.localeCompare(b);
    }
    return a.length - b.length;
});

console.log(arr.join("\n"));