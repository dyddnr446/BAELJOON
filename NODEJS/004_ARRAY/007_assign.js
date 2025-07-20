const nums = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);

nums.sort();

let min=0;
let n_min=0;

for(let i=1;i<=30;i++){
    if(!nums.includes(i)){
        if(!min)min=i;
        else if(min)n_min=i
    }
}
console.log(min);
console.log(n_min);