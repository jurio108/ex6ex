let s1 = Symbol('key');
let s2 = Symbol('key');

//console.log(s1 == s2);

console.log("3"+2);
console.log(isNaN("a"/3));

let o1 = {name : "성동", age : 20};
console.log(String(o1.age));

const n1 = 12345678;

//n1 = 123;

// 세자리 ,표시
console.log(n1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));