    const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
    const A = new Set(input[1].split(" ").map(Number));
    const B = new Set(input[2].split(" ").map(Number));

    let result = 0;
    A.forEach((v)=>{
        if(!B.has(v))result++;
    });
    B.forEach((v)=>{
        if(!A.has(v))result++;
    });

    console.log(result);