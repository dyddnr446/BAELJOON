const input = require('fs').readFileSync(0, "utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" ").map(Number));
function test(n1, n2){
    if(n1%n2===0)return "multiple";
    if(n2%n1===0)return "factor";
    return "neither";
}

for(let i=0;i<input.length;i++){
    let [n1, n2] = input[i];
    if(!n1 || !n2)continue;
    console.log(test(n1,n2));
}