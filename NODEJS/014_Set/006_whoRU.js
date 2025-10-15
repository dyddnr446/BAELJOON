const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const [N, M] = input[0].split(" ").map(Number);
const lis = new Set(input.slice(1,N+1));
const see = new Set(input.slice(N+1));

let cnt = 0;
let result = []
for(const i of lis){
    if(see.has(i)){
        cnt++;
        result.push(i);
    }
}
result.sort((a,b)=>b.localeCompare(a));
console.log(cnt);
result.forEach((v)=>{
    console.log(v);
});