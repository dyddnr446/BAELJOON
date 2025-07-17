let input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);

const [N, M] = input[0].split(' ').map(Number);

let baskets = Array(N).fill(0);
for (let m = 0; m < M; m++) {
    const [i, j, k] = input[m + 1].split(' ').map(Number);
    for (let index = i - 1; index < j; index++) {
        baskets[index] = k; 
    }
}

console.log(baskets.join(' '));