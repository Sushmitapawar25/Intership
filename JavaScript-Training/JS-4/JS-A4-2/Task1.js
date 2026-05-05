// FUnction Expression

let add2 = function(x,y){
    console.log('Function Expression');
    return x + y;
}
// console.log(add1(1,2));
console.log(add2(3,5));
// console.log(add3()); // if we do not provide parameter it gives code as ans


let add4 = add2;
console.log(add4(2,3));

// Arrow Function

//Example 1

let mult1 = (x,y) => {      //1 way
    console.log('Arrow Function 1');
    return x*y;
}
let mult3 = (x,y) => x * y;  //2 way

console.log(mult1(2,3));
// console.log(mult2(2,3));
console.log(mult3(4,3));

// EXAMPLE 2

let double2 = (x) => {
    console.log('Arrow Function 1');
    return 2 * x;
}
console.log(double2(4));

let double3 = (x) => 2*x;
console.log(double3(4));

let double4 = x => 2*x;  //only for when 1 parameter otherwise put into bracket
console.log(double4(4));

// EXAMPLE 3

let getNum1 = () =>{  //1 way without parameter
    console.log('Arrow Function');
    return 15;
}
console.log(getNum1());

let getNum2 = () => 15;  //2 way
console.log(getNum2());

// EXAMPLE 4

let putData1 = (inpName, inpAge) => {
    console.log('Arrow Function');
    return {name: inpName, age:inpAge};
}
console.log(putData1('Jack',25));

let putData3 = (inpName,inpAge) => ({name:inpName, age:inpAge});
console.log(putData3('Bob',33));



