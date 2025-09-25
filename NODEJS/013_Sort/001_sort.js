const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map(Number);

input.shift();

function test(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

const uniq_arr = [...new Set(input)];

console.log(test(uniq_arr).join("\n"));