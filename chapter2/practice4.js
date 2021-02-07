//hoisting
// var name = "어피치";

// function run(){
//     var name = "라이언";
//     var name = "프로도";
//     console.log(name);
//     return name;
// }

// run();
// console.log(name);

// function printName(name){
//     var result = inner();

//     console.log(typeof inner);
//     console.log("name is " + result);

//     // run
//     function inner(){
//         return "inner";
//     }
//     // error
//     // inner = function(){
//     //     return "inner";
//     // };
// }

// printName();

// var myName = "hi";

// function myName() {
//     console.log("yuddomack");
// }
// function yourName() {
//     console.log("everyone");
// }

// var yourName = "bye";

// console.log(typeof myName);
// console.log(typeof yourName);

// var myName = "Heee";
// var yourName;

// function myName() {
//     console.log("myName Function");
// }
// function yourName() {
//     console.log("yourName Function");
// }

// console.log(typeof myName);
// console.log(typeof yourName);



var a = 1;
var b = 5;
function outerFunc(){
    function innerFunc(){
        a = b;
    }
    console.log(a);
    a = 3;
    b = 4;
    innerFunc();
    console.log(a);
    var b = 2;
}
outerFunc();