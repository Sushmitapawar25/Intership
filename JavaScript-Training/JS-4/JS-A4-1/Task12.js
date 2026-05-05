
let arr1 = ["exam", "hello", "box", "java"];

// a)

let result1 = arr1.map((ele) => {
    return (ele.includes('x')) ? 'GotX' : 'NOT Found';
});

console.log(result1);

// b)
let arr2 = ["javascript", "html", "reactjs", "css"];

let result2 = arr2.map((ele) => {
    return (ele.length > 5) ? ele.slice(0, 5) : ele;
});

console.log(result2);

// c)

let arr3 = [120, 80, 150, 40, 200];

let result3 = arr3.map((ele) => {
    return (ele > 100) ? ele + 10 : ele - 25;
});

console.log(result3);