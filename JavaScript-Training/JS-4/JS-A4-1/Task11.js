let arr = [10, 45, 67, 12, 89, 23, 56];

// a) Max number

let maxNum = arr.reduce((acc, val) => {
    return (val > acc) ? val : acc;
});
console.log("Max Number :", maxNum);

// b) Min number

let minNum = arr.reduce((acc, val) => {
    return (val < acc) ? val : acc;
});
console.log("Min Number :", minNum);

// c) Count numbers greater than 25

let count = arr.reduce((acc, val) => {
    return (val > 25) ? acc + 1 : acc;
}, 0);
console.log("Count Greater Than 25 :", count);