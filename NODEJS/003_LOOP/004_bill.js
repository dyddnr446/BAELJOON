// 문제
// 준원이는 저번 주에 살면서 처음으로 코스트코를 가 봤다. 정말 멋졌다. 그런데, 몇 개 담지도 않았는데 수상하게 높은 금액이 나오는 것이다! 준원이는 영수증을 보면서 정확하게 계산된 것이 맞는지 확인해보려 한다.

// 영수증에 적힌,

// 구매한 각 물건의 가격과 개수
// 구매한 물건들의 총 금액
// 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.

// 입력
// 첫째 줄에는 영수증에 적힌 총 금액 
// $X$가 주어진다.

// 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 
// $N$이 주어진다.

// 이후 
// $N$개의 줄에는 각 물건의 가격 
// $a$와 개수 
// $b$가 공백을 사이에 두고 주어진다.


const fs = require('fs');
const input = fs.readFileSync(0,"utf-8").toString().trim().split(/\r?\n/);
const bill = Number(input[0]);
const cnt = Number(input[1]);
const buy = input.slice(2).map((str)=>str.split(" ").map(Number));

let sum = 0;
for(let i of buy){
    let pre_sum=1;
    for(let j of i){
        pre_sum*=j;
    }
    sum+=pre_sum;
}
if(bill === sum)console.log('Yes');
else console.log('No');