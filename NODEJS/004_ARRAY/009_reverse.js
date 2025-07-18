const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let k = 1; k <= M; k++) {
    const [i, j] = input[k].split(' ').map(Number);
    const start = i - 1;
    const end = j - 1;

    let tempArr = [];
    for (let idx = start; idx <= end; idx++) {
        tempArr.push(baskets[idx]);
    }
    tempArr.reverse();

    for (let idx = 0; idx < tempArr.length; idx++) {
        baskets[start + idx] = tempArr[idx];
    }
}

console.log(baskets.join(' '));
