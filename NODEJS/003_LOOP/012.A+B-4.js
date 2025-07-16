const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);

input.forEach((item)=>{
    const [a, b] = item.split(" ").map(Number);
    console.log(a+b);
})


