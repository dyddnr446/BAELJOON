const n = Number(require('fs').readFileSync(0,"utf-8").toString().trim());

function test(n){
    const envel = [5, 3];  // 봉투 크기
    let cnt = Infinity;

    for(let i=Math.floor(n/envel[0]); i>=0; i--){
        let tmpN = n - i*envel[0];
        if(tmpN % envel[1] === 0){
            let j = tmpN / envel[1];
            cnt = Math.min(cnt, i+j);
        }
    }
    return cnt === Infinity ? -1 : cnt;
}

const result = test(n);
console.log(result);