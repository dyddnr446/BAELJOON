const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const n = Number(input[0]);

function check_gch(str) {
    let seen = new Set();
    let prev = '';

    for (let ch of str) {
        if (ch !== prev) {
            if (seen.has(ch)) return 0;
            seen.add(prev);
        }
        prev = ch;
    }
    return 1;
}

input.shift();
const result = input.reduce((p,v)=>{
    return p+check_gch(v);
}, 0);

console.log(result);