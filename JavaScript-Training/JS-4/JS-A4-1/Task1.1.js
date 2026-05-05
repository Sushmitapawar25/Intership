// == &&  ===
let num1 = 25;
let num2 = 25;
let str1 = '25';
let str2 = '25';
let bool1 = true;
let bool2 = false;
let arr1 = [25];
let obj1 = {value:25};

console.log('Loose',num1 == num2);
console.log('Strict',num1 === num2);

console.log(num1 == str1);
console.log(num1 == bool1);
console.log(str1 == bool1);

console.log(num2 == arr1);
console.log(num2 === arr1);

// Truthy Falsy

let arr2 = [1,-1,2.55,-3.6,0];
let arr3 = [{},[],[2],{age:12},true];

let arr1tf = arr2.map(function(val){
    if(val)
        return val + 'is Truthy';
    else
        return val + 'is Falsy';
});
console.log(arr1tf);


// Logical operator

let x = 0;
let x1 = !(x);
console.log("! of", x,"is",x1);


// AND & OR
let a = 10;
let b = 20;

let c1 = a || b;
console.log("OR :",a,"||",b,'is',c1);
let c2 = b || a;
console.log("OR :",b,"||",a,'is',c2);
let d1 = a && b;
console.log("AND :",a,"&&",b,'is',d1);
let d2 = b && a;
console.log("AND :",b,"&&",a,'is',d2);


let e1 = 2;
let e2 = 3;
let e3 = 4;
let e4 = 5;
console.log(e1 || e2 || e3 || e4);
console.log(e1 && e2 && e3 && e4);

// Ternary Operator

let z = 10;
(z > 8) ? console.log('Big') : console.log('Small');


(z > 8) ? z++ : z--;
console.log(z);

