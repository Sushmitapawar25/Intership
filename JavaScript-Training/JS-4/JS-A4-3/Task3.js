// a)

var a;

console.log(a);

a = 10;

greet();

function greet() {
    console.log("Hello");
}

// b
// Advantage of Hoisting
// calling functions before declaration
// flexible code writing
// better code organization

// c)
function add(a, b = 5) {
    console.log(a + b);
}
add(10);

// d)

// Default parameters:- Default parameters assign initial values to function parameters.
// Purpose:- avoids undefined values
// makes functions safer
// reduces extra checking in code.

function greet1(name = "Guest") {
    console.log(name);
}

greet1();

// e)
let obj1 = {
    name: "Sushmita",
    age: 22
};

let obj2 = {
    ...obj1,
    city: "Pune"
};

console.log(obj2);

// f)
// Spread Operator is used to:
// copy object
// avoid changing original object
// add/update properties easily

// Purpose:- It Protects data from modification.

let obj3 = {name: "Ram"};

let obj4 = {...obj1};

obj2.name = "Shyam";

console.log(obj3.name);

// g)
let student = {
    name: "Anita",
    marks: 85
};

let {name, marks} = student;

console.log(name);
console.log(marks);

// h)
// is variable NAme imp for Object Destructuring
// Yes.Variable names should match property names.

// i)
// is order imp in Object destructuring
// No. Object destructuring works using property names, not order.

// j)
// Property Not found in oBject Destructuring.
// If property is missing, value becomes undefined.

let obj = {
    name: "Raj"
};

let {city} = obj;

console.log(city);

// k 
// Defalut Values in Object Destructuring
// Default values are used when property is missing.

let obj5 = {
    name: "Sam"
};

// let {name, city = "Pune"} = obj5;

console.log(city);