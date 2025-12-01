const input = require('fs').readFileSync(0,"utf-8").toString().split(/\r?\n/).map(v=>v.split(""));

input.map(lists=>{
    if(lists.join("")===".") 
    //소괄호 체크
    let temp1=[];
    //대괄호 체크
    let temp2=[];
    //에러시 1
    let flag=0;
    for(let i=0;i<lists.length;i++){
        if(lists[i]==="(")temp1.push(1);
        else if(lists[i]===")"){
            if(typeof(temp1.pop())===undefined){
                flag=1;
                break;
            }
        }
        if(lists[i]==="[")temp2.push(1);
        else if(lists[i]==="]"){
            if(typeof(temp2.pop())===undefined){
                flag=1;
                break;
            }
        }
    }
    if(flag===1)return "no";
    else return "yes";
});