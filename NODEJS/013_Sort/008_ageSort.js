const input = require('fs').readFileSync(0,"utf-8").toString().trim()
.split(/\r?\n/).map((v1)=>v1.split(" "));
input.shift();

input.sort((a, b)=>{
    if(a[0]===b[0])return 0;
    return a[0]-b[0]; 
});

input.forEach((v)=>{
    console.log(`${v[0]} ${v[1]}`);
})