const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(/\r?\n/)
  .map((v) => v.split(""));
input.shift();


const result = [];
let temp = [];
let flag = false;

for (let i = 0; i < input.length; i++) {
  temp = [];
  flag = false;

  if (input[i].length % 2 === 1) {
    result.push("NO");
    continue;
  }

  for (let j = 0; j < input[i].length; j++) {
    let chk = "";
    if (input[i][j] === "(") temp.push(1);
    if (input[i][j]  === ")") chk = temp.pop();
    if (typeof chk === "undefined"){
        flag = true;
        break;
    }
  }
  if (temp.length > 0 || flag) result.push("NO");
  else result.push("YES");
}

console.log(result.join('\n'));