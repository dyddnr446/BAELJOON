const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const n = Number(input[0]);

for(let i=1;i<=n;i++){
    let temp = input[i].split(" ");
    let cnt = Number(temp[0]);
    console.log(temp[1].split('').map(c=>c.repeat(cnt)).join(''));
}