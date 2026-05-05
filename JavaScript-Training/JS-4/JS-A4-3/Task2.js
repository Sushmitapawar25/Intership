/* a) Example for Hoisting
Concept:
Variable declarations using var are moved to the top during execution. This process is called hoisting.
Only the declaration is hoisted, not the value assignment.
*/
console.log(a);
var a = 10;

Output:
undefined

// b) Advantage of Function Hoisting
//Function hoisting allows us to call a function before defining it.
// Purpose:- It improves flexibility in coding and allows functions to be used anywhere in the program

greet();

function greet(){
    console.log("Hello");
}

// c) Example for Default Parameters
function add(a, b = 2){
    console.log(a + b);
}
add(10);

// d) Concept of Default Parameters
// Default parameters are used to give initial values to function parameters.
// Purpose:
// They help avoid undefined values and make functions more reliable.

// e) Example for Spread Operator in Objects
let obj1 = {
    name: "Rahul",
    age: 22
};

let obj2 = {
    ...obj1,
    city: "Latur"
};

console.log(obj2);

// f) Need for Spread Operator
// Purpose:
// - Create copies of objects
// - Avoid modifying original objects
// - Add or update properties easily
// - Useful in React and modern JavaScript

// g) Example for Object Destructuring
let student = {
    name: "Anita",
    marks: 85
};

let {name, marks} = student;

console.log(name);
console.log(marks);

// h)Are Variable Names Important in Object Destructuring?
// Yes.
// The variable name should match the property name.











