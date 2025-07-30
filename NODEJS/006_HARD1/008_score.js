const sc_table = {
    "A+" : 4.5,
    "A0" : 4.0,
    "B+" : 3.5,
    "B0" : 3.0,
    "C+" : 2.5,
    "C0" : 2.0,
    "D+" : 1.5,
    "D0" : 1.0,
    "F" : 0.0
}

const input = require('fs').readFileSync(0,"utf-8").toString().trim().split(/\r?\n/).map((v)=>v.split(" "));

const scores = input.filter((v)=>v[2]!='P');

let sum_credit=0;
let sum_all = 0;
for (let i of scores){
    let credit = Number(i[1]);
    let grade = sc_table[i[2]];
    sum_credit+=credit;
    sum_all+=credit*grade;
}

console.log(sum_all / sum_credit);
