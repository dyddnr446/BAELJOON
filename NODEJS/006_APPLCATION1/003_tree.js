const input = Number(require('fs').readFileSync(0,"utf-8").toString());



for(let i=0;i<input;i++){
    console.log(" ".repeat(input-i-1)+"*".repeat(i*2+1))
}

for(let i=input-2;i>=0;i--){
    console.log(" ".repeat(input-i-1)+"*".repeat(i*2+1))
}

