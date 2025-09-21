const input = Number(require('fs').readFileSync(0,"utf-8").toString().trim());

function test(n){
    let base = 666;
    let cnt = 1;
    while(1){
        if(cnt===n)return base;
        base++;
        if(String(base).indexOf('666')!=-1)cnt++;
    }
}

const result = test(input);
console.log(result);