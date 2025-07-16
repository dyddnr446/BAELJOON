const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const nums = input[1].split(" ").map(Number);
const max_num = Math.max(...nums);

const new_nums = nums.map((num)=>{
    return num/max_num*100;
});

const new_avg = new_nums.reduce((prev,current)=>{
    return prev+=current;
}, 0) / nums.length;

console.log(new_avg);   