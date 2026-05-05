// a

let arr = [10, 20, 30, 40];
    (arr[0] == 10) ? arr.shift() : arr;
console.log(arr);

// b)

let obj = {
    name: "Sushmita",
    count: 5
};
(obj.count) ? obj.count++ : obj.count = 1;
console.log(obj);

// c)

function multiply(n1, n2) {
    return (n1 != 0 && n2 != 0) ? n1 * n2 : -15;
}
console.log(multiply(5, 4));

// d)
function checkStrings(s1, s2) {
    return (s1 != "" && s2 != "") ? 'Good' : 'Error';
}
console.log(checkStrings("Hello", "World"));