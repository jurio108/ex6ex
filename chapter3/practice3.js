//obj

// obj copy
// let oriObj = {name: "ryon", age: 5, changeAge(){this.age += 1;}};
// let refObj = oriObj;
// //refObj.age = 4;
// refObj.changeAge();
// console.log(oriObj.age);
// console.log(refObj.age);

// let copyObj = Object.assign({}, oriObj);
// copyObj.age = 7;
// console.log(oriObj.age);
// console.log(copyObj.age);

let oriObj = {item1: "ryon", item2: "apeach", item3: {group: "friends", age: 3}};
let refObj = Object.assign({}, oriObj);

oriObj.item1 = "muzi";
refObj.item1 = "con";
oriObj.item3.age = 5;
console.log(oriObj);
console.log(refObj);

// obj create
// let oriObj = {name: "ryon", age: 5, changeAge(){this.age += 1;}};
// let chiObj = Object.create(oriObj);
// chiObj.name = "apeach";
// console.log(oriObj.name);
// console.log(chiObj.name);

// //chiObj.changeAge();
// console.log(oriObj.age);
// console.log(chiObj.age);

// oriObj.name = "muzi";
// oriObj.changeAge();
// console.log(chiObj.name);
// console.log(chiObj.age);

// oriObj.changeAge();
// console.log(oriObj.age);
// console.log(chiObj.age);
// chiObj.changeAge();
// chiObj.changeAge();
// console.log(oriObj.age);
// console.log(chiObj.age);
// oriObj.changeAge();
// console.log(oriObj.age);
// console.log(chiObj.age);
// oriObj.changeAge();
// oriObj.changeAge();
// console.log(oriObj.age);
// console.log(chiObj.age);