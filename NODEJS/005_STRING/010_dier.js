const input = require('fs').readFileSync(0,"utf-8").toString().trim();

function getNum(ch){
    if("ABC".includes(ch)) return 3
    if("DEF".includes(ch)) return 4
    if("GHI".includes(ch)) return 5
    if("JKL".includes(ch)) return 6
    if("MNO".includes(ch)) return 7
    if("PQRS".includes(ch)) return 8
    if("TUV".includes(ch)) return 9
    if("WXYZ".includes(ch)) return 10
}

const result = input.split('').map(v=>getNum(v)).reduce((p,c)=>{
    return p + c
},0);

console.log(result);