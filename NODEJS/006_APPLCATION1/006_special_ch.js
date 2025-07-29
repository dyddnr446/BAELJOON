const spe_dict = {
    "č	" : "c=",
    "ć	" : "c-",
    "dž	" : "dz=",
    "đ" : "d-",
    "lj	" : "lj",
    "nj	" : "nj",
    "š	" : "s=",
    "ž	" : "z="
}
let input = require('fs').readFileSync(0,"utf-8").toString().trim();

for(let i of Object.keys(spe_dict)){
    if(input.includes(spe_dict[i])) input = input.replaceAll(spe_dict[i],"0");
}
console.log(input.length);