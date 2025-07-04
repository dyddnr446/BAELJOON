// 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 출력
// 시험 성적을 출력한다.

const fs = require('fs');
const input = fs.readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const numbers = []
input.map((str)=>str.split(" ").map((num)=>numbers.push(Number(num))));

if (numbers>=90) console.log("A");
else if (numbers>=80) console.log("B");
else if (numbers>=70) console.log("C");
else if (numbers>=60) console.log("D");
else console.log("F");