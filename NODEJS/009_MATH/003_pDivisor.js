const input = require('fs').readFileSync(0,"utf-8").toString().split(/\r?\n/).map(Number);

function test(num){
    let temp=[]
    for(let i=1;i<num;i++){
        if(num%i===0)temp.push(i);
    }
    const sum = temp.reduce((pv,cv)=>{
        return pv+cv;
    },0);
    if(sum===num)console.log(`${num} = ${temp.join(" + ")}`);
    else console.log(`${num} is NOT perfect.`);
}

for(let i=0;i<input.length;i++){
    if(input[i]>0)test(input[i]); 
}