//spread operator
let calc = (x, y, ...params)=>x + y + params.reduce((sum, param)=>sum + param); 

let arr = [0, 1];
console.log(calc(-1, ...arr, 2, ...[3]));

var arr1 = [1,2,3];
var arr2 = [...arr1];
arr2.push(4);
console.log(arr2);


function resParams(arg1, arg2, arg3, ...args){
    console.log([arg1, arg2, arg3, args]);
}

resParams(1,2,3,4);
resParams(1,2);
resParams(1);