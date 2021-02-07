//this
// let obj = {};

// obj.act = function(){
//     this.value = 'default value';

//     function innerAct(){
//         this.value = 'innerAct value';
//         console.log("this.value: " + this.value);
//     }

//     function innerReact(caller){
//         caller.value = "innerReact value";
//         console.log("this.value: " + this.value);
//         console.log("caller.value: " + caller.value);
//     }

//     innerAct();
//     console.log("obj 객체의 this.value: " + this.value);

//     innerReact(this);
//     console.log("obj 객체의 this.value: " + this.value);
// };

// obj.act();
// console.log("전역 객체의 this.value: " + this.value);

let obj = {};

obj.act = function(){
    this.value = 'default value';

    let oF = outerFunc.bind(this);
    oF();
};

function outerFunc(){
    //this.value = 'outerFunc value';

    console.log("outerFunc this.value: " + this.value);
    console.log("obj.value: " + obj.value);
}

obj.act();