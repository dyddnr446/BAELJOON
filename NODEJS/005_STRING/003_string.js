const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const T = Number(input[0]);
for(let i=1;i<=T;i++){
    f_ch = input[i][0];
    l_ch = input[i][input[i].length-1];
    console.log(f_ch + l_ch);
}