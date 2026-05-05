// a)

function checkEven(x) {
    return (x % 2 == 0) ? x + 10 : x - 3;
}
console.log(checkEven(8));
console.log(checkEven(7));

// b)

function largerNumber(x1, x2) {
    return (x1 > x2) ? x1 : x2;
}
console.log(largerNumber(20, 15));

// c)
function checkCharacter(str) {
    return (str.includes('p')) ? 'Yes' : 'No';
}
console.log(checkCharacter("apple"));

// d)
function result(marks) {
    return (marks >= 40) ? 'Pass' : 'Fail';
}
console.log(result(75));

// e)
function maxNumber(n1, n2) {
    return {
        maxValue: (n1 > n2) ? n1 : n2
    };
}
console.log(maxNumber(25, 40));

// f)
function marksStatus(x) {
    return {
        marks: x,
        status: (x >= 40) ? 'Pass' : 'Fail'
    };
}
console.log(marksStatus(60));

