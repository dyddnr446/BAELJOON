// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

const cnt = require('fs').readFileSync(0, "utf-8").toString().split(/\r?\n/).map((str)=>str.split(" ").map(Number))[0];
let result = " ".repeat(cnt);

for(let i=1;i<=cnt;i++){
    result = result.slice(0, cnt -i) + "*".repeat(i)
    console.log(result);
}
