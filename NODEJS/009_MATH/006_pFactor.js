const input = Number(require('fs').readFileSync(0,"utf-8").toString().trim());

function test(num){
    let i = 2;
    while(num>=i){
        if(num%i===0){
            console.log(i);
            num/=i;
            continue;
        }
        i++;
    }
}

test(input);