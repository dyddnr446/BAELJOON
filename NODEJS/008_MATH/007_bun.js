const num = Number(require("fs").readFileSync(0, "utf-8").toString().trim());

let n = 1;
while ((n * (n + 1)) / 2 < num) {
  n++;
}

let total = (n * (n + 1)) / 2;
let offset = total - num;

let x, y;

if (n % 2 === 0) {
  x = n - offset;
  y = 1 + offset;
} else {
  x = 1 + offset;
  y = n - offset;
}

console.log(`${x}/${y}`);