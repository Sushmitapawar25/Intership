// let VS var

let x = 20;
if(x > 5){
    var a1 = 20;
    let a2 = 25;
    a3 = 30; //global variable
    console.log('a1=',a1);
    console.log('a2=',a2);
    console.log('a3=',a3);
}
console.log('a1=',a1);
console.log('a3=',a3);

function hello(){
    c1 = 10;
    var c2 = 12; //function scope
    let c3 = 16; //block scope
}
hello();
console.log('c1=',c1);//global scope run
// console.log('c2=',c2); //it gives error because ufnction scope
// console.log('c3=',c3); // error block scope 

// Hoisting
hello1();

function hello1(){
    console.log('Hello1');
    hello2();
}
function hello2(){
    console.log('Hello');
}

// Default Parameter
function add(a1,a2,a3){
    console.log(a1,a2,a3);
    let sum = a1 + a2 + a3;
    console.log(sum);
}
add(1,2,3);
add(1,2);
add(5);

// Spread Operator for object

let user1 = {
    name: 'Jack',
    age: 22,
};
let user2 = {...user1};
let user3 = {...user1,course:'Javascript'}; //aslo add new info
user2.name = 'Mary';
console.log(user1);
console.log(user2);
console.log(user3);


// Object Destructuring 


let student = {
    name: 'Jack',
    age: 22,
    course: 'JavaScript',
    grade:'A'
};
let {name,age,course,grade} = student;
console.log(name,age,course);
