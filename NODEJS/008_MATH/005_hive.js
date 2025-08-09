const input = Number(require('fs').readFileSync(0,"utf-8").toString().trim());

function hive(num) {
    if (num === 1) return 1;

    let count = 1; 
    let floor = 1;
    
    while (true) {
        count += floor * 6;
        if (num <= count) {
            return floor + 1;
        }
        floor++;
    }
}
console.log(hive(input));