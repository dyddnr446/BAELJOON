const input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split(/\r?\n/);

const n = Number(input.shift());
const stack = [];
const output = [];
for (let i = 0; i < n; i++) {
  const [cmd, x] = input[i].split(" ").map(Number);

  switch (cmd) {
    case 1: // push
      stack.push(x);
      break;

    case 2: // pop
      output.push(stack.length > 0 ? stack.pop() : -1);
      break;

    case 3: // size
      output.push(stack.length);
      break;

    case 4: // empty
      output.push(stack.length === 0 ? 1 : 0);
      break;

    case 5: // top
      output.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
  }
}
console.log(output.join('\n'));
