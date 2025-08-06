const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

const n = Number(input);
const length = 2 ** n + 1;
const result = length * length;

console.log(result);