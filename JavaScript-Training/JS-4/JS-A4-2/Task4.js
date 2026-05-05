// a)
const arr = ['a','aaa','bb','c'];
const startswitha = arr.find(str => str.startsWith('a'));
console.log(startswitha);

// b)
let strArr2 = ["java", "javascript", "react"];
let longIndex = strArr2.findIndex(str => str.length > 7);
console.log(longIndex);

// c)
let strArr3 = ["exam", "hello", "box", "cat"];
let withX = strArr3.filter(str => str.includes("x"));
console.log(withX);

// d)
let strArr4 = ["html", "css", "javascript"];
let lengths = strArr4.map(str => str.length);
console.log(lengths);

// e)
let strArr5 = ['Hello','this','is','','','me'];
let result = strArr5.reduce(
    (acc, str) => acc + ((str !== "") ? str[0] : "X"),
    ""
);
console.log(result);

// f
let strArr6 = ['A','bcd','XYZ'];
let output = strArr6.map(str => `<p>${str}</p>`).join("");
console.log(output);