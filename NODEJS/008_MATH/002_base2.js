function toBaseN(num, base){
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num === 0 ) return "0";

    let result = "";

    while(num>0){
        const rest = num % base;
        result = digits[rest] + result;
        num = Math.floor(num / base);
    }
    return result;
}

const input = require('fs').readFileSync(0,"utf-8").toString().split(" ").map(Number);
console.log(toBaseN(input[0],input[1]));