const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const set = new Set();

for (let i = 1; i < input.length; i++) {
  const [name, action] = input[i].split(" ");
  if (action === "enter") set.add(name);
  else set.delete(name);
}

const result = [...set].sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
console.log(result.join("\n"));
