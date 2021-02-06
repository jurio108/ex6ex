//high order function
const arr = [1,2,3,4,5];

//const arr2x = [];
// for(let i = 0; i < arr.length; i++){
//     arr2x.push(arr[i]*2);
// }
const arr2x = arr.map(item=>item*2);

console.log(arr2x);