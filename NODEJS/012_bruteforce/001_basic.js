const input = require('fs').readFileSync(0,"utf-8").toString().split(/\r?\n/).map(v=>v.split(" ").map(Number));

const t_max = input[0][1];
const cards = [...input[1]];


let max = 0;
let tmp = 0;
for(let i=0;i<cards.length;i++){
    for(let j=0;j<cards.length;j++){
        if(i===j)continue;
        for(let k=0;k<cards.length;k++){
            if(j===k||i===k)continue;
            tmp=cards[i]+cards[j]+cards[k];
            if(tmp>=max&&tmp<=t_max)max=tmp;
        }
    }
}
console.log(max);
