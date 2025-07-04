// 문제
// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

// 출력
// 첫째 줄에 다음 세 가지 중 하나를 출력한다.

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.


const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").toString().trim().split(/\r?\n/);
const numbers = [];
input.map((str)=>str.split(" ").map((num)=>numbers.push(Number(num))));

if (numbers[0]>numbers[1]) console.log(">");
else if (numbers[0]<numbers[1]) console.log("<");
else console.log("==");