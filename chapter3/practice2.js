//closure
function outerFunc(name){
    let saying = name + " 안녕";
    return ()=>saying;
}

let closure1 = outerFunc('라이언');
let closure2 = outerFunc('콘');

console.log(closure1());
console.log(closure2());