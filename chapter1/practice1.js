//basic1
var str1 = 'var';
let str2 = 'let';

console.log(this.str1);
console.log(this.str2);

function run(){
    console.log(this.str1);
    console.log(this.str2);
    console.log(str1);
    console.log(str2);
}

run();
