const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(" ");
const base = Number(input[1]);

const nums = input[0].split("").map((v)=>{
    if(/[A-Z]/.test(v))return v.charCodeAt()-55;
    if(/[0-9]/.test(v))return v.charCodeAt()-48;
}).reverse();

let result = 0;
for(let i=0;i<nums.length;i++){
    result+=nums[i]*Math.pow(base,i);
}
console.log(result);