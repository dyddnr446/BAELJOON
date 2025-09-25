const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);

function avg(arr){
    const sum = arr.reduce((pv,cv)=>{
        return pv+cv;
    },0);
    return sum/arr.length;
}
function mid(arr){
    let temp = 0;
    for(let i = 0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[Math.floor(arr.length/2)];
}
const average = avg(input);
const middle = mid(input);

console.log(average);
console.log(middle);