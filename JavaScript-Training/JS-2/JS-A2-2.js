// Task 1
// a
// i
let emp1 = {
    name : 'Sam',
    dept : 'Tech',
    designation : 'Manager',
    salary : 40000,
    raise : true
}
let emp2 = {
    name : 'Mary',
    dept : 'Finance',
    designation : 'Trainee',
    salary : 18500,
    raise : true
}
let emp3 = {
    name : 'Bill',
    dept : 'HR',
    designation : 'Executive',
    salary : 21200,
    raise : false
}
console.log(emp1);
console.log(emp2);
console.log(emp3);

// ii

const empArray = [emp1,emp2,emp3];
let company = {
    companyName : 'Tech Stars',
    website : 'www.techstars.site',
    employees : empArray
}
console.log(company);

// iii
let emp4 = {
    name : 'Anna',
    dept : 'Tech',
    designation : 'Executive',
    salary : 25600,
    raise : false
}
company.employees.push(emp4);
console.log(company);

// iv total salary 
function computeSalary(compJSON){
    let empArr = compJSON.employees;
    let total = 0;
    for(let i=0; i<empArr.length; i++){
        let emp = empArr[i];
        total = total + emp.salary;
    }
    return total;
}
let totSalary = computeSalary(company);
console.log('Total salary is' , totSalary);

// v Function prosessRaise
function processRaise(compJSON){
    let empArr = compJSON.employees;
    for(let i=0; i<empArr.length; i++){
        let emp = empArr[i];
        if(emp.raise){
            emp.salary = emp.salary * 1.10;
            emp.raise = false;
        }
    }
}
processRaise(company);
console.log(company);

// vi

const wfhEmps = ['Anna','Sam'];
function addWfh(compJSON, wfhEmps){
    let empArr = compJSON.employees;
    for(let i=0; i<empArr.length; i++){
        let emp = empArr[i];
        if(checkInArray(emp.name,wfhEmps)){
            emp.wfh = true;
        }
        else{
            emp.wfh = false;
        }
    }
}
function checkInArray(value,arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] ==  value){
            return true;
        }
    }
    return false;
}
addWfh(company,wfhEmps);
console.log(company);

// Task 2

let detail = {
    name : 'Mark',
    email : 'markemail.com' ,
    salary : 80000
}
console.log(detail);

// Task 3.1
let bilidA = {
    billid : 45661,
    amount : 2500
}
console.log(bilidA);

// Task 3.2
bilidA.amount = 2700;
console.log(bilidA);

// Task 4
let b1 = {
    billid : 401,
    amount : 200
}
let b2 = {
    billid : 402,
    amount : 500
}
console.log(b1);
console.log(b2);

let bill = b1.amount + b2.amount;
console.log('Amount of the Bills ', bill);

// TAsk 5

let empt = {};
empt.id = 'EMP1223';
empt.email = 'emp1223@email.com';
empt.company = 'EMP Inc';

console.log(empt);

// Task 6.1
let pro1 = {
    code: 'PX101',
    stock: 15,
    price : 30
}
let pro2 = {
    code: 'PX102',
    stock: 24,
    price : 20
}
let pro3 = {
    code: 'PX103',
    stock: 33,
    price : 10
}
console.log(pro1);
console.log(pro2);
console.log(pro3);

// Task 6.2
const myarr = [pro1,pro2,pro3];
let shop = {
    products : myarr
}
console.log(shop);

// Task 6.3
let totalStock1 = 0;

for(let i=0; i<shop.products.length; i++){
    totalStock1 += shop.products[i].stock;
}

shop.totalStockQty = totalStock1;

console.log(shop);

// Task 6.4
let productD = {
    code: "PX104",
    stock: 10,
    price: 40
};

shop.products.push(productD);

// recompute stock
let totalStock2 = 0;

for(let i=0; i<shop.products.length; i++){
    totalStock2 += shop.products[i].stock;
}

shop.totalStockQty = totalStock2;

console.log(shop);

// Task 6.5
let increaseList = ["PX101", "PX103"];

for(let i=0; i<shop.products.length; i++){
    let prod = shop.products[i];

    if(increaseList.includes(prod.code)){
        prod.price = prod.price + (prod.price * 0.10);
    }
}

console.log(shop);

// Task 7.1

let studentsArr1 = [
    { name: "Mark", Maths: 80, English: 75, Science: 63 },
    { name: "Bob", Maths: 90, English: 81, Science: 88 },
    { name: "Julia", Maths: 88, English: 87, Science: 89 },
    { name: "Anthony", Maths: 60, English: 64, Science: 61 }
];

console.log(studentsArr1);

// Task 7.2
let compMarksArr = [
    { name: "Mark", Computers: 90 },
    { name: "Anthony", Computers: 70 },
    { name: "Julia", Computers: 88 },
    { name: "Bob", Computers: 81 }
];

for(let i=0; i<studentsArr1.length; i++){
    for(let j=0; j<compMarksArr.length; j++){
        if(studentsArr1[i].name === compMarksArr[j].name){
            studentsArr1[i].Computers = compMarksArr[j].Computers;
        }
    }
}

console.log(studentsArr1);

// Task 7.3
for(let i=0; i<studentsArr1.length; i++){
    let s = studentsArr1[i];

    let total = s.Maths + s.English + s.Science + s.Computers;
    s.totalMarks = total;
}

console.log(studentsArr1);

// Task 7.4
let resultArr2 = [];

for(let i=0; i<studentsArr1.length; i++){
    let s = studentsArr1[i];

    let total = s.totalMarks;
    let avg = total / 4;

    let max = s.Maths;
    if(s.English > max){
        max = s.English;
    } 
    if(s.Science > max){
        max = s.Science;
    }
    if(s.Computers > max){
        max = s.Computers;
    }

    resultArr2.push({
        name: s.name,
        avgMarks: avg,
        maxMarks: max
    });
}

console.log(resultArr2);

// Task 7.5

for(let i=0; i<studentsArr1.length; i++){
    if(studentsArr1[i].name === "Bob"){
        studentsArr1.splice(i, 1);
        break;
    }
}

console.log(studentsArr1);