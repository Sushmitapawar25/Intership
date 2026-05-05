// a)
console.log(a);

var a = 10;

// function hoisting
greet();

function greet() {
    console.log("Hello");
}

// b)
function add(a, b = 0) {
    console.log(a + b);
}

add(10);

// c)
let obj1 = {
    name: "Aishwarya",
    age: 24
};

let obj2 = {
    ...obj1,
    city: "Pune"
};

console.log(obj2);

// d)
let student1 = {
    name: "Anita",
    marks: 85
};

let {name, marks} = student1;

console.log(name);
console.log(marks);

// e)
let emp = {
    empName: "Rahul"
};

let {empName, city = "Mumbai"} = emp;

console.log(empName);
console.log(city);