const input = require('fs').readFileSync(0, "utf-8").toString().trim();
const result = new Set();

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
        const temp = input.slice(i, j);
        result.add(temp);
    }
}

console.log(result.size);