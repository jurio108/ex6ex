//basic6
function exFunc(param){
    console.log(param + ' go');
}

const exFunc2 = function(param){
    console.log(param + ' go');
};

//exFunc('exFunc');
//exFunc2('exFunc2');


function sum(a = 0, b = 0){
    return a + b;
}

// console.log(sum(5, 4));
// console.log(sum(4));
// console.log(sum());

function sum2(){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum2(1,2,3,4,5));