//basic5
let friends = [
    {name : "라이언", age : 5},
    {name : "어피치", age : 4},
    {name : "콘", age : 2},
    {name : "무지", age : 3}
];

//console.log(friends[0].name);

// for (let i = 0; i < friends.length; i++){
//     console.log('이름: ' + friends[i].name + ', 나이: ' + friends[i].age);
// }

// for (let friend of friends){
//     console.log('이름: ' + friend.name + ', 나이: ' + friend.age);
// }

// for (let prop in friends[0]){
//     console.log('속성: ' + prop + ', 값: ' + friends[0][prop]);
// }

friends.forEach((friend, idx)=>{
    console.log('이름: ' + friend.name + ', 나이: ' + friend.age + 'idx: ', + idx);   
});

// let i = 0;
// do{
//     console.log('이름: ' + friends[i].name + ', 나이: ' + friends[i].age);   
//     i++;
// }while(i < friends.length);