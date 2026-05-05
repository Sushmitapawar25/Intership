// a)

const square = (n) => n * n;
console.log(square(5));

// b)
const squareCube = (n) =>
console.log("Square :", n * n, "Cube :", n * n * n);
squareCube(3);

// c)
const larger = (a, b) => (a > b) ? a : b;
console.log(larger(10, 25));

// d)
const upperCase = (str) => str.toUpperCase();
console.log(upperCase("javascript"));

// e)
const checkEqual = (a, b, c) => (a === b && b === c);
console.log(checkEqual(5, 5, 5));

// f))
const factorCount = (n) =>
Array.from({ length: n }, (_, i) => i + 1)
.reduce((acc, val) => (n % val === 0) ? acc + 1 : acc, 0);

console.log(factorCount(6));

// g)
const printA = (n) => "A".repeat(n);
console.log(printA(5));

// h)
const removeChar = (str, ch) =>
str.split(ch).join("");
console.log(removeChar("javascript", "a"));

// i)
const pattern = (n) =>
    console.log(
        Array.from({ length: n }, (_, i) =>
            (i % 2 === 0) ? "A" : "B"
        ).join("")
    );
pattern(1);
pattern(2);
pattern(3);
pattern(4);

// j)
const differentChars = (str) =>
    [...new Set(str)].length;
console.log(differentChars("hello"));

// k)
const json1 = (p1) => ({ txt: p1 });
console.log(json1("JavaScript"));

// l)
const json2 = (p1, p2) => ({
    txt1: p1,
    txt2: p2
});
console.log(json2("Hello", "World"));
