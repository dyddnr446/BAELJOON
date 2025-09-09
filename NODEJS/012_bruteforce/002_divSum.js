const n = Number(require('fs').readFileSync(0,"utf-8").toString());



function test(n){
    let tmp = 0;
    let p = 1;

    while(1){
        let tmp = p + p.toString().split("").map(Number).reduce((pv,cv)=>{
            return pv+cv;
        },0);
        if(tmp===n)return p;
        if(p===1000000)return 0;
        p++;
    }
}

console.log(test(n));