// a)
function isGreater(x){
    return (x != 0) ? x : 25;
}
console.log(isGreater(10));

// b)
function checkNumber(m,n){
    return m || n || 12;
}
console.log(checkNumber(5,8));
console.log(checkNumber(0, 7));
console.log(checkNumber(0, 0));

// c)
function checkString(str) {
    return str || 'A';
}
console.log(checkString("Hello"));
console.log(checkString(""));

// d
function getDiscount(x) {
    return {
        discount: x || 12
    };
}
console.log(getDiscount(20));
console.log(getDiscount(0));

// e)
function getName(str) {
    return {
        name: str || 'TestUser'
    };
}
console.log(getName("Sushmita"));
console.log(getName(""));

// f)
function getDetails(s1, n1) {
    return {
        name: s1 || 'Jack',
        age: n1 || 24
    };
}
console.log(getDetails("Rahul", 30));
console.log(getDetails("", 0));

// g)
function checkStrings(s1, s2) {
    return s1 || s2 || 'Bug';
}
console.log(checkStrings("Hi", "Hello"));
console.log(checkStrings("", "Hello"));
console.log(checkStrings("", ""));

// h)
function getNumber(m, n) {
    return (m && n) || 0;
}
console.log(getNumber(5, 10));
console.log(getNumber(0, 10));

// i
function getString(s1, s2) {
    return (s1 && s2) || "";
}
console.log(getString("Hi", "World"));
console.log(getString("", "World"));

// j
function getMyNum(num1, num2) {
    return {
        myNum: num1 || num2 || -1
    };
}
console.log(getMyNum(5, 10));
console.log(getMyNum(0, 8));
console.log(getMyNum(0, 0));